import GUI, { showGUI } from './gui.js';
import { loadAssets, getTexture, getSheet, getAnim, bindDrag } from './lib.js';
import { getBB, fakeBB, entityCollides, anyCollide } from './collision.js';
import {
  AGENT_TEXTURE,
  TILES_TEXTURE,
  TARGET_TEXTURE,
  NODE_TEXTURE
} from './assets.js';
import { Sprite, AnimatedSprite, bindClick, ID, between, magnitude } from './lib.js';
import { HSV } from './color.js';
import Entity from './Entity.js';

const AGENT_RADIUS = 12;
const TARGET_MET_DISTANCE = AGENT_RADIUS * 2;
const AGENT_SPEED = 3;

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

let mapData = [
  [1,1,1,1,1,1,1,1,1,],
  [1,1,2,2,2,2,1,1,1,],
  [1,1,2,1,1,2,1,1,1,],
  [1,1,0,1,1,2,1,1,1,],
  [1,1,2,2,2,2,1,1,1,],
  [1,1,1,1,1,1,1,1,1,],
];

let mapMetaData = mapData.map(x => x.map(y => ({
  onFire: false,
})));

let mapLiveData = mapData.map(x => x.map(y => ({
  sprite: null,
})));

let tileBrush = 0;

export default function setup(app, level, devMode) {
    const dat = window.dat || null;
    GUI.init(dat);
    showGUI('trace', traceConfig);
    showGUI('camera', cameraConfig);

    function beginLevel() {
      const camera = container(app.stage);
      camera.scale.set(cameraConfig.scale);
      camera.interactive = true;

      const mapLayer = container(camera);
      const agentLayer = container(camera);
      const localGuiLayer = container(camera);
      const globalGuiLayer = container(app.stage);
      const entities = [];
      const agents = [];
      const nodes = {};

      //#region Map

      if(level.mapStuff) {
        mapData = level.mapStuff.mapData;
        mapMetaData = level.mapStuff.mapMetaData;
      }

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

      function genMapSprite(x, y) {
        const tex = res.textures[tileNames[mapData[y][x]]];
        const s = Sprite(tex, { x: x * tileSize + tileSize/2, y: y * tileSize, layer: mapLayer, drag: false });
        return s;
      }

      for(let y = 0; y < mapData.length; y++) {
        for(let x = 0; x < mapData[y].length; x++) {
          mapLiveData[y][x].sprite = genMapSprite(x, y);
        }
      }

      let mapMouseDown = false;

      function mouseEventToTile(event) {
        const bb = app.view.getBoundingClientRect();
        const x = event.clientX - bb.left;
        const y = event.clientY - bb.top;
        const tileX = Math.floor(x/tileSize);
        const tileY = Math.floor(y/tileSize);
        return { tileX, tileY };
      }

      function inBounds(tileX, tileY) {
        return tileY < mapData.length && tileX < mapData[tileY].length;
      }

      function paintTile(tileX, tileY) {
        mapLayer.removeChild(mapLiveData[tileY][tileX].sprite);
        mapData[tileY][tileX] = tileBrush;
        mapLiveData[tileY][tileX].sprite = genMapSprite(tileX, tileY);
      }

      app.view.addEventListener('mousedown', (event) => {
        if(!event.shiftKey) {
          mapMouseDown = true;
          const { tileX, tileY } = mouseEventToTile(event);
          if(inBounds(tileX, tileY)) {
            if(event.altKey) {
              tileBrush = mapData[tileY][tileX];
            } else {
              paintTile(tileX, tileY);
            }
          }
        }
      });

      app.view.addEventListener('mousemove', (event) => {
        if(!event.shiftKey && mapMouseDown) {
          const { tileX, tileY } = mouseEventToTile(event);
          if(inBounds(tileX, tileY)) {
            if(event.altKey) {
              tileBrush = mapData[tileY][tileX];
            } else {
              paintTile(tileX, tileY);
            }
          }
        }
      });

      app.view.addEventListener('mouseup', (event) => {
        mapMouseDown = false;
      });
      //#endregion

      //#region Draw Target
      if(devMode) {
        let target = Sprite(TARGET_TEXTURE, { x: -100, y: -100, layer: globalGuiLayer, anchorX: 0.5, anchorY: 0.5 });

        setTimeout(() => {
          app.view.addEventListener('click', (event) => {
            if(event.shiftKey) {

            } else {
              const bb = app.view.getBoundingClientRect();
              target.x = event.clientX - bb.left;
              target.y = event.clientY - bb.top;
              for(let i = 0; i < agents.length; i++) {
                agents[i].target = { x: target.x, y: target.y };
              }
            }
          });
        }, 1000);
      }
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
          const ghost = Sprite(AGENT_TEXTURE, { x, y, layer: agentLayer });
          ghost.alpha = 0.5;
          bindDrag(ghost, item);
        }

        const agent = Sprite(AGENT_TEXTURE, { x, y, layer: agentLayer, anchorX: 0.5, anchorY: 0.5 });
        agent.spooked = false;
        agents.push(agent);
      }

      function insertNode(item) {
        const { id, x, y } = item;
        nodes[item.id] = item;
        if(devMode) {
          const dupe = Sprite(NODE_TEXTURE, { x, y, layer: localGuiLayer, anchorY: 0.5, anchorX: 0.5 });
          dupe.on('click', (event) => {
            console.log(event.data.originalEvent);
            if(event.data.originalEvent.altKey) {
              addEdge(item.id);
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
      globalGuiLayer.addChild(draw);

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
        camera.scale.set(cameraConfig.scale);
        const groundBBs = []; //collidables.map(x => ({...getBB(x), collidable: x}));

        draw.clear();

        if(traceConfig.collision) {
          for(const groundBB of groundBBs) {
            traceBB(groundBB, 0x00FFFF);
          }
        }

        for(const edge of level.edges) {
          traceEdge(edge);
        }

        for(let i = 0; i < agents.length; i++) {
          const agent = agents[i];
          traceAgent(agent);

          if(agent.spooked && !agent.target) {
            if(!agent.currentNode) {
              const nearestNode = Object.values(nodes).reduce((a, b) => magnitude(between(a, agent)) < magnitude(between(b, agent)) ? a : b);
              agent.target = nearestNode;

            } else {
              const edgesOut = level.edges.filter(e => e.from === agent.currentNode.id);
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

            agent.angle = (theta * 180 / Math.PI) + 90;
            agent.x += v.x * delta * AGENT_SPEED;
            agent.y += v.y * delta * AGENT_SPEED;
            if(mag < TARGET_MET_DISTANCE) {
              agent.currentNode = agent.target;
              agent.target = null;
              agent.spooked = false;
            }
          }
          //#endregion

          if(agents.every(agent => !agent.spooked)) {
            for(const agent of agents) {
              agent.spooked = true;
            }
          }

          //#region Jostle mechanics
          for(let j = 0; j < i; j++) {
            const d = between(agents[j], agent);
            const distance = magnitude(d);
            const overlap = AGENT_RADIUS * 2 - distance;
            if(overlap > 0) {
              agents[j].x += d.x / distance * overlap / 2;
              agents[j].y += d.y / distance * overlap / 2;
              agent.x -= d.x / distance * overlap / 2;
              agent.y -= d.y / distance * overlap / 2;

            }
          }
          //#endregion
        }

        for(const entity of entities) {
          const prevBB = getBB(entity);
          entity.state.x += entity.velocity.x * delta;
          entity.state.y += entity.velocity.y * delta;
          let nextBB = getBB(entity);
          let collided = entityCollides(nextBB, groundBBs);
          let i = 0;
          while(collided) {
            i++;
            if(i > 5) {
              console.log('TOO MANY COLLISIONS');
              console.log(entity.name, collided.name);
              break;
            }

            // come from above
            if(nextBB.bottom > collided.top && prevBB.bottom <= collided.top) {

            // come from below
            } else if(nextBB.top < collided.bottom && prevBB.top >= collided.bottom) {

            } else if(nextBB.right > collided.left && prevBB.right <= collided.left) {

            } else if(nextBB.left < collided.right && prevBB.left >= collided.right) {

            }

            nextBB = getBB(entity);
            collided = entityCollides(nextBB, groundBBs);
          }
          traceBB(nextBB, 0x00ff00);
        }

      };

      app.ticker.add(step);
    }

    beginLevel();
}
