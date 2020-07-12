import GUI, { showGUI } from './gui.js';
import { loadAssets, getTexture, getSheet, getAnim, bindDrag, betweenBBs } from './lib.js';
import { getBB, fakeBB, entityCollides, anyCollide } from './collision.js';
import {
  AGENT_TEXTURE,
  TILES_TEXTURE,
  TARGET_TEXTURE,
  NODE_TEXTURE,
  FIRE_TEXTURE,
  DOOR_TEXTURE,
} from './assets.js';
import { Sprite, AnimatedSprite, bindClick, ID, between, magnitude } from './lib.js';
import { HSV } from './color.js';
import Entity from './Entity.js';
import Keys, { KEY } from './keys.js';
import Controls from './controls.js';

const AGENT_RADIUS = 12;
const TARGET_MET_DISTANCE = AGENT_RADIUS * 2;
const AGENT_SPEED = 1;
const SPOOK_DISTANCE = 150;
const PAN_SPEED = 10;

const traceConfig = {
  aim: false,
  collision: false
}

const cameraConfig = {
  scale: 1,
}

function container(parent) {
  const layer = new PIXI.Container();
  parent.addChild(layer);
  return layer;
}

const TILE_DOOR = 2;

const tileProps = {
  0: {
  flamable: true,
    collides: false,
    flameRetardation: 3,
  },
  1: {
    flamable: false,
    collides: true,
    flameRetardation: 3,
  },
  2: {
    flamable: true,
    flameRetardation: 3,
  },
  3: {
    flamable: true,
    collides: false,
    flameRetardation: 3,
  },
  4: {
    flamable: true,
    collides: false,
    flameRetardation: 1,
  },
  5: {
    flamable: true,
    collides: false,
    flameRetardation: 3,
  },
  6: {
    flamable: true,
    collides: false,
    flameRetardation: 3,
  },
  7: {
    flamable: false,
    collides: false,
    flameRetardation: 3,
    safeZone: true,
  }
};

let fireIndex = {};

let tileBrush = 0;

let fireSpreadTimer = 0;
let fireSpreadRate = 20;
let fireTicker = 0;
let points = 0;

export default function setup(app, level, devMode) {
  const controls = new Controls();
    points = 0;
    const dat = window.dat || null;
    GUI.init(dat);
    Keys.init(document);
    showGUI('trace', traceConfig);
    showGUI('camera', cameraConfig);
    const engine = Matter.Engine.create();
    const world = engine.world;
    world.gravity.y = 0;
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    let fc = 0;
    let dfc = 0;
    let paused = false;

    document.addEventListener('keyup', (event) => {
      if(event.which === 32) {
        dfc += 1;
      } else if(event.which === 80) {
        paused = !paused;
        fc = 0;
        dfc = 0;
      }
    });

    function beginLevel() {
      fc = 0;
      dfc = 0;

      const camera = container(app.stage);
      camera.scale.set(cameraConfig.scale);
      camera.interactive = true;

      const mapLayer = container(camera);
      const underDoorLayer = container(camera);
      const agentLayer = container(camera);
      const doorLayer = container(camera);
      const fireLayer = container(camera);
      const localGuiLayer = container(camera);
      const globalGuiLayer = container(app.stage);
      const entities = [];
      const agents = [];
      const nodes = {};
      const colliders = [];

      //#region Map

      const mapData = level.mapStuff.mapData;
      const mapMetaData = level.mapStuff.mapMetaData;

      const mapLiveData = mapData.map(x => x.map(y => ({
        sprite: null,
        fireSprite: null,
        doorSprite: null,
        onFire: false,
        doorOpen: false,
      })));


      const res = app.loader.resources[TILES_TEXTURE];
      const tileNames = Object.keys(res.data.frames);
      const tileSize = 32;

      const appBB = app.view.getBoundingClientRect();

      tileNames.forEach((tileName, i) => {
        const tex = res.textures[tileName];
        const s = Sprite(tex, { x: appBB.right -i*tileSize - tileSize, y: appBB.bottom - tileSize - tileSize/2, layer: globalGuiLayer, drag: false });
        s.tint = 0x55ff55;
        bindClick(s, () => {
          tileBrush = i;
        });
      });

      function genMapSprite(x, y, layer = mapLayer, tile) {
        if(tile === undefined) {
          tile = mapData[y][x];
        }
        const tex = res.textures[tileNames[tile]];
        const s = Sprite(tex, { x: x * tileSize + tileSize/2, y: y * tileSize + tileSize/2, layer, drag: false });
        return s;
      }

      function genFireSprite(x, y) {
        const s = AnimatedSprite(FIRE_TEXTURE, { x: x * tileSize + tileSize/2, y: y * tileSize + tileSize/2, layer: fireLayer, drag: false, speed: 0.12 });
        s.scale.x = 1;
        s.scale.y = 1;
        s.play();
        return s;
      }

      function setFire(x, y) {
        mapLiveData[y][x].onFire = true;
        mapLiveData[y][x].fireSprite = genFireSprite(x, y);
        fireIndex[y + '-' + x] = { x, y };
        for(const agent of agents) {
          if(!agent.spooked && magnitude(between({ x: x * 32 + 16, y: y * 32 + 16 }, agent)) < SPOOK_DISTANCE) {
            agent.spooked = true;
          }
        }
      }

      for(let y = 0; y < mapData.length; y++) {
        for(let x = 0; x < mapData[y].length; x++) {
          const { onFire } = mapMetaData[y][x];
          if(onFire) {
            setFire(x,y )
          }
          if(mapData[y][x] === TILE_DOOR) {
            const s = AnimatedSprite(DOOR_TEXTURE, { anchorX: 0.5, anchorY: 0.5, x: x * tileSize + tileSize/2, y: y * tileSize + tileSize/2, layer: doorLayer, drag: false, speed: 0.12 });
            s.angle = mapMetaData[y][x].rotation || 0;
            s.scale.x = 1;
            s.scale.y = 1;
            s.loop = false;
            mapLiveData[y][x].doorSprite = s;
            mapLiveData[y][x].underSprite = genMapSprite(x, y, underDoorLayer, mapMetaData[y][x].underTile || 0);
          }
          mapLiveData[y][x].sprite = genMapSprite(x, y);
          if(tileProps[mapData[y][x]].collides) {
            const { sprite } = mapLiveData[y][x];
            Matter.World.add(world, [Matter.Bodies.rectangle(sprite.x, sprite.y, sprite.width, sprite.height, { isStatic: true })]);
          }
          if(tileProps[mapData[y][x]].safeZone) {
            colliders.push(getBB(mapLiveData[y][x].sprite));
          }
        }
      }

      let mapMouseDown = false;

      function mouseEventToTile(event) {
        const bb = app.view.getBoundingClientRect();
        const x = event.clientX - bb.left - camera.position.x;
        const y = event.clientY - bb.top - camera.position.y;
        const tileX = Math.floor(x/tileSize);
        const tileY = Math.floor(y/tileSize);
        return { tileX, tileY };
      }

      function inBounds(tileX, tileY) {
        return tileX > 0 && tileY > 0 && tileY < mapData.length && tileX < mapData[tileY].length;
      }

      function paintTile(tileX, tileY, brush = tileBrush) {
        const existingSprite = mapLiveData[tileY][tileX].sprite;
        if(existingSprite) {
          mapLayer.removeChild(existingSprite);
        }
        const existingDoorSprite = mapLiveData[tileY][tileX].doorSprite;
        if(existingDoorSprite && brush !== TILE_DOOR) {
          doorLayer.removeChild(existingDoorSprite);
        }
        const existingUnderDoorSprite = mapLiveData[tileY][tileX].underSprite;
        if(existingUnderDoorSprite) {
            underDoorLayer.removeChild(existingUnderDoorSprite);
        }
        if(brush === TILE_DOOR) {
          mapLiveData[tileY][tileX].underSprite = genMapSprite(tileX, tileY, underDoorLayer, mapMetaData[tileY][tileX].underTile || 0)
        }
        mapData[tileY][tileX] = brush;
        mapLiveData[tileY][tileX].sprite = genMapSprite(tileX, tileY);
      }

      function paintEvent(event) {
        const { tileX, tileY } = mouseEventToTile(event);
        const defaultLive = {
          sprite: null,
          fireSprite: null,
          onFire: false,
          doorOpen: false,
        };
        const defaultMeta = {
          onFire: false,
        };
        if(!inBounds(tileX, tileY)) {
          const yOff = tileY + 1 - mapData.length;
          for(let i = 0; i < yOff; i++) {
            const row = new Array(mapData[0].length).fill(3);
            const liveRow = new Array(mapData[0].length).fill(null).map(x => ({...defaultLive}));
            const metaRow = new Array(mapData[0].length).fill(null).map(x => ({...defaultMeta}));
            mapData.push(row);
            mapLiveData.push(liveRow);
            mapMetaData.push(metaRow);
          }
          let xOff = tileX + 1 - mapData[0].length;
          if(xOff > 0) {
            for(let y  = 0; y < mapData.length; y++) {
              for(let i = 0; i < xOff; i++) {
                mapData[y].push(3);
                mapLiveData[y].push({...defaultLive});
                mapMetaData[y].push({...defaultMeta});
              }
            }
          }
          mapData[tileY][tileX] = tileBrush;
          for(let y = 0; y < mapData.length; y++) {
            for(let x = 0; x < mapData[y].length; x++) {
              paintTile(x, y, mapData[y][x]);
            }
          }
        } else {
          if(event.altKey) {
            tileBrush = mapData[tileY][tileX];
          } else {
            paintTile(tileX, tileY);
          }
        }
      }

      app.view.addEventListener('mousedown', (event) => {
        const { tileX, tileY } = mouseEventToTile(event);
        if(inBounds(tileX, tileY)) {
          if(devMode && Keys.isKeyDown(KEY.F)) {
            setFire(tileX, tileY);
            return;
          }
          if(devMode && Keys.isKeyDown(KEY.R) && mapData[tileY][tileX] === TILE_DOOR) {
            mapMetaData[tileY][tileX].rotation += 90;
            mapLiveData[tileY][tileX].doorSprite.angle += 90;
            return;
          }
          if(devMode && Keys.isKeyDown(KEY.T) && mapData[tileY][tileX] === TILE_DOOR) {
            if(typeof mapMetaData[tileY][tileX].underTile !== 'number') {
                mapMetaData[tileY][tileX].underTile = 0;
            }
            mapMetaData[tileY][tileX].underTile = (mapMetaData[tileY][tileX].underTile + 1)%Object.keys(tileProps).length;
            paintTile(tileX, tileY, TILE_DOOR);
            return;
          }
          if(mapData[tileY][tileX] === TILE_DOOR) {
            mapLiveData[tileY][tileX].doorSprite.play();
            mapLiveData[tileY][tileX].doorOpen = true;
            return;
          }
        }
        if(Keys.isKeyDown(KEY.A)) {
          mapMouseDown = true;
          paintEvent(event);
        }
      });

      app.view.addEventListener('mousemove', (event) => {
        if(!event.shiftKey && mapMouseDown) {
          paintEvent(event);
        }
      });

      app.view.addEventListener('mouseup', (event) => {
        mapMouseDown = false;
      });
      //#endregion

      //#region Edge design
      let nodeFrom = null;
      function addEdge(target) {
        console.log('add edge');
        if(!nodeFrom) {
          console.log('first');
          nodeFrom = target;
        } else {
          console.log('second');
          const nodeTo = target;
          const edge = { from: nodeFrom, to: nodeTo };
          level.edges.push(edge);
          insertEdge(edge);
          nodeFrom = null;
        }
      }
      //#endregion

      //#region Level initialisation
      function insertEdge(edge) {
        // const nodeFrom = nodes[edge.from];
        // const nodeTo = nodes[edge.to];
        // nodeFrom.edges = nodeFrom.edges || [];
        // nodeFrom.edges.push(edge.to);
      }

      function insertAgent(item) {
        const { x, y } = item;
        if(devMode) {
          const ghost = Sprite(AGENT_TEXTURE, { x, y, layer: agentLayer, anchorX: 0.5, anchorY: 0.5, scale: 0.75 });
          ghost.alpha = 0.5;
          bindDrag(ghost, item);
        }

        const agent = Sprite(AGENT_TEXTURE, { x, y, layer: agentLayer, anchorX: 0.5, anchorY: 0.5, scale: 0.75 });
        agent.id = ID();
        agent.spooked = false;
        const body = Matter.Bodies.circle(x, y, 10, { restitution: 0 });
        agent.body = body;
        Matter.World.add(world, [agent.body]);
        agents.push(agent);
      }

      function insertNode(item) {
        const { id, x, y } = item;
        nodes[item.id] = item;
        if(devMode) {
          const dupe = Sprite(NODE_TEXTURE, { x, y, layer: localGuiLayer, anchorY: 0.5, anchorX: 0.5 });
          dupe.on('click', (event) => {
            if(event.data.originalEvent.altKey) {
              addEdge(item.id);

            } else if(event.data.originalEvent.metaKey) {
              delete nodes[item.id];
              level.contents = level.contents.filter(i => !(i.type === 'node' && i.id === item.id));
              level.edges = level.edges.filter(e => !(e.from === item.id || e.to === item.id));
              dupe.visible = false;
            }
          });

          bindDrag(dupe, item);
        }
      }

      for(const item of level.contents) {
        switch(item.type) {
          case 'node':
            insertNode(item);
            break;
          case 'agent':
            insertAgent(item);
            break;
        }
      }
      //#endregion

      //#region Level Reset/Save Buttons
      const resetBtn = new PIXI.Text('Reset');
      resetBtn.interactive = true;
      resetBtn.x = 10;
      resetBtn.y = document.body.clientHeight - 100;
      globalGuiLayer.addChild(resetBtn);
      resetBtn.on('click', (event) => {
        app.stage.removeChild(camera);
        app.ticker.remove(step);
        beginLevel();
      });

      const score = new PIXI.Text('Score: ');
      score.x = document.body.clientWidth - 200;
      score.y = document.body.clientHeight - 120;
      globalGuiLayer.addChild(score);

      if(devMode) {
        const saveBtn = new PIXI.Text('Save');
        saveBtn.interactive = true;
        saveBtn.x = 100;
        saveBtn.y = document.body.clientHeight - 100;
        globalGuiLayer.addChild(saveBtn);
        saveBtn.on('click', (event) => {
          level.mapStuff = {
            mapData,
            mapMetaData,
          };
          console.log('LEVEL', level);
          fetch(`/levels/${level.id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(level)
          }).then(() => alert('saved'));
        });
      }
      //#endregion

      const draw = new PIXI.Graphics();
      localGuiLayer.addChild(draw);

      //#region Collision Tracers
      function traceBB(bb, color = 0xff0000) {
        if(traceConfig.collision) {
          draw.moveTo(bb.left, bb.top)
            .lineStyle(1, color)
            .lineTo(bb.right, bb.top)
            .lineTo(bb.right, bb.bottom)
            .lineTo(bb.left, bb.bottom)
            .lineTo(bb.left, bb.top);
        }
      }

      function traceAgent(el, color = 0xff0000) {
        if(traceConfig.collision) {
          draw.lineStyle(1, color).drawCircle(el.x, el.y, AGENT_RADIUS);
        }
      }

      function traceEdge({ from, to }, color = 0x0000ff) {
        const nodeFrom = nodes[from];
        const nodeTo = nodes[to];
        draw.beginFill(color).drawCircle(nodeTo.x, nodeTo.y, 4).endFill();
        draw
          .moveTo(nodeFrom.x, nodeFrom.y)
          .lineStyle(2, color)
          .lineTo(nodeTo.x, nodeTo.y);
      }

      //#endregion

      //#region Draw Insertable Entities
      if(devMode) {
        let drawingEdgeFrom = null;

        const insertables = [
          { type: 'node' },
          { type: 'agent' },
        ];

        let xInsert = 300;
        const yInsert = app.view.height - 40;
        for(const i of insertables) {
          switch(i.type) {
            case 'node': {
              const sprite = Sprite(NODE_TEXTURE, { x: xInsert, y: yInsert, layer: globalGuiLayer, anchorY: 0.5, anchorX: 0.5 });
              sprite.interactive = true;
              sprite.on('click', (event) => {
                const id = ID();
                const x = (-camera.x + app.view.width / 2) / camera.scale.y;
                const y = app.view.height / 2 / camera.scale.x;
                const item = { ...i, id, x, y };
                level.contents.push(item);
                insertNode(item);
              });
              break;
            };
            case 'agent': {
              const sprite = Sprite(AGENT_TEXTURE, { x: xInsert, y: yInsert, layer: globalGuiLayer, anchorY: 0.5, anchorX: 0.5 });
              sprite.interactive = true;
              sprite.on('click', (event) => {
                const x = (-camera.x + app.view.width / 2) / camera.scale.y;
                const y = app.view.height / 2 / camera.scale.x;
                const item = { ...i, x, y };
                level.contents.push(item);
                insertAgent(item);
              });
              break;
            }
          }

          xInsert += 50;
        }
      }
      //#endregion

      const step = delta => {
        if(paused) {
          if(fc >= dfc) {
            return;
          } else {
            fc += 1;
          }
        }

        camera.position.x -= controls.getHori() * PAN_SPEED * delta;
        camera.position.y -= controls.getVert() * PAN_SPEED * delta;

        camera.scale.set(cameraConfig.scale);

        draw.clear();

        if(traceConfig.collision) {
          for(const groundBB of colliders) {
            traceBB(groundBB, 0x00FFFF);
          }
        }

        for(const edge of level.edges) {
          traceEdge(edge);
        }

        for(let i = 0; i < agents.length; i++) {
          const agent = agents[i];
          let prevBB = getBB(agent);
          // traceAgent(agent);
          traceBB(prevBB);

          if(agent.spooked && !agent.target) {
            if(!agent.currentNode) {
              const nearestNode = Object.values(nodes).reduce((a, b) => magnitude(between(a, agent)) < magnitude(between(b, agent)) ? a : b);
              agent.target = nearestNode;

            } else {
              const edgesOut = level.edges.filter(e => {
                if(!(e.from === agent.currentNode.id)) {
                  return false;
                }
                const node = nodes[e.to];
                const tileX = Math.floor(node.x / 32);
                const tileY = Math.floor(node.y / 32);
                const tile = mapLiveData[tileY][tileX];
                return tile.doorSprite ? tile.doorOpen : true;
              });
              if(edgesOut.length) {
                const target = edgesOut[Math.floor(Math.random() * edgesOut.length)];
                agent.target = nodes[target.to];
              }
            }
          }

          //#region Move agents towards target
          if(agent.target) {
            const v = between(agent.target, agent);
            const mag = magnitude(v);
            v.x /= mag;
            v.y /= mag;
            const theta = Math.atan2(v.y, v.x);
            if(mag < TARGET_MET_DISTANCE) {
              agent.currentNode = agent.target;
              const tile = mapLiveData[Math.floor(agent.target.y / 32)][Math.floor(agent.target.x / 32)];
              agent.spooked = true;
              agent.target = null;

            } else {
              agent.angle = (theta * 180 / Math.PI) + 90;
              Matter.Body.setVelocity(agent.body, { x: v.x * AGENT_SPEED, y: v.y * AGENT_SPEED });
            }

          } else {
            Matter.Body.setVelocity(agent.body, { x: 0, y: 0 });
          }
        }

        Matter.Engine.update(engine, 1000/60, 1);
        for(const agent of agents) {
          agent.x = agent.body.position.x;
          agent.y = agent.body.position.y;
        }

        for(const agent of agents) {
          const agentBB = getBB(agent);
          if(!agent.done) {
            if(anyCollide(agentBB, colliders)) {
              agent.done = true;
              points += 1;
            }
          }
        }

        score.text = "Score: " + points;

        //#region Fire
        fireSpreadTimer += delta;
        if(fireSpreadTimer > fireSpreadRate) {
          fireTicker += 1;
          fireSpreadTimer = 0;
          const keys = Object.keys(fireIndex);
          const done = [];
          keys.forEach(k => {
            const { x, y } = fireIndex[k];
            if(fireTicker % tileProps[mapData[y][x]].flameRetardation === 0) {
              const adjacent = [
                { x: x - 1, y },
                { x: x + 1, y },
                { x, y: y + 1 },
                { x, y: y - 1 },
              ];
              adjacent.forEach(({x, y}) => {
                if(inBounds(x,y) && !mapLiveData[y][x].onFire && tileProps[mapData[y][x]].flamable) {
                  setFire(x, y);
                }
              });
              done.push(k)
            }
          });
          done.forEach(k => {
            delete fireIndex[k];
          })
        }
        //#endregion
      };

      app.ticker.add(step);
    }

    beginLevel();
}
