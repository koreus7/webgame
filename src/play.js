import GUI, { showGUI } from './gui.js';
import { loadAssets, getTexture, getSheet, getAnim, bindDrag, betweenBBs } from './lib.js';
import { getBB, fakeBB, entityCollides, anyCollide } from './collision.js';
import {
  AGENT_TEXTURE,
  TILES_TEXTURE,
  TARGET_TEXTURE,
  NODE_TEXTURE,
  FIRE_TEXTURE,
} from './assets.js';
import { Sprite, AnimatedSprite, bindClick, ID, between, magnitude } from './lib.js';
import { HSV } from './color.js';
import Entity from './Entity.js';

const AGENT_RADIUS = 12;
const TARGET_MET_DISTANCE = AGENT_RADIUS * 2;
const AGENT_SPEED = 3;

const traceConfig = {
  collision: true,
}

const cameraConfig = {
  scale: 1,
}

function container(parent) {
  const layer = new PIXI.Container();
  parent.addChild(layer);
  return layer;
}

const tileProps = {
  0: {
    flamable: false,
    collides: true,
  },
  1: {
    flamable: false,
  },
  2: {
    flamable: true,
    collides: true,
  },
};

let fireIndex = {};

let tileBrush = 0;

let fireSpreadTimer = 0;
let fireSpreadRate = 20;

export default function setup(app, level, devMode) {
    const dat = window.dat || null;
    GUI.init(dat);
    showGUI('trace', traceConfig);
    showGUI('camera', cameraConfig);

    let fc = 0;
    let dfc = 0;
    let paused = true;

    document.addEventListener('keyup', (event) => {
      if(event.which === 32) {
        dfc += 1;
      } else if(event.which === 80) {
        paused = !paused;
        fc = 0;
        dfc = 0;
      }
    })

    function beginLevel() {
      fc = 0;
      dfc = 0;

      const camera = container(app.stage);
      camera.scale.set(cameraConfig.scale);
      camera.interactive = true;

      const mapLayer = container(camera);
      const agentLayer = container(camera);
      const fireLayer = container(camera);
      const localGuiLayer = container(camera);
      const globalGuiLayer = container(app.stage);
      const entities = [];
      const agents = [];
      const nodes = {};
      const colliders = [];

      //#region Map

      let mapData = level.mapStuff.mapData;
      let mapMetaData = level.mapStuff.mapMetaData;

      let mapLiveData = mapData.map(x => x.map(y => ({
        sprite: null,
        fireSprite: null,
        onFire: false,
      })));

      const res = app.loader.resources[TILES_TEXTURE];
      const tileNames = Object.keys(res.data.frames);
      const tileSize = 32;

      const appBB = app.view.getBoundingClientRect();

      tileNames.forEach((tileName, i) => {
        const tex = res.textures[tileName];
        const s = Sprite(tex, { x: appBB.right -i*tileSize - tileSize, y: appBB.bottom - tileSize - tileSize/2, layer: globalGuiLayer, drag: false, anchorY: 0.5, anchorX: 0.5 });
        s.tint = 0x55ff55;
        bindClick(s, () => {
          tileBrush = i;
        });
      });

      function genMapSprite(x, y) {
        const tex = res.textures[tileNames[mapData[y][x]]];
        const s = Sprite(tex, { x: x * tileSize + tileSize/2, y: y * tileSize + tileSize/2, layer: mapLayer, drag: false, anchorX: 0.5, anchorY: 0.5 });
        return s;
      }

      function genFireSprite(x, y) {
        const s = AnimatedSprite(FIRE_TEXTURE, { x: x * tileSize + tileSize/2, y: y * tileSize + tileSize/2, layer: fireLayer, drag: false, speed: 0.12, anchorY: 0.5, anchorX: 0.5 });
        s.scale.x = 1;
        s.scale.y = 1;
        s.play();
        return s;
      }

      function setFire(x, y) {
        mapLiveData[y][x].onFire = true;
        mapLiveData[y][x].fireSprite = genFireSprite(x, y);
        fireIndex[y + '-' + x] = { x, y };
      }

      for(let y = 0; y < mapData.length; y++) {
        for(let x = 0; x < mapData[y].length; x++) {
          const { onFire } = mapMetaData[y][x];
          if(onFire) {
            setFire(x,y )
          }
          mapLiveData[y][x].sprite = genMapSprite(x, y);
          if(tileProps[mapData[y][x]].collides) {
            colliders.push(getBB(mapLiveData[y][x].sprite));
          }
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

      function paintTile(tileX, tileY, brush = tileBrush) {
        const existingSprite = mapLiveData[tileY][tileX].sprite;
        if(existingSprite) {
          mapLayer.removeChild(existingSprite);
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
        };
        const defaultMeta = {
          onFire: false,
        };
        if(!inBounds(tileX, tileY)) {
          const yOff = tileY + 1 - mapData.length;
          for(let i = 0; i < yOff; i++) {
            const row = new Array(mapData[0].length).fill(1);
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
                mapData[y].push(1);
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
        if(event.altKey && event.shiftKey) {
          const { tileX, tileY } = mouseEventToTile(event);
          if(inBounds(tileX, tileY)) {
            setFire(tileX, tileY);
          }
        } else if(!event.shiftKey) {
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
          const ghost = Sprite(AGENT_TEXTURE, { x, y, layer: agentLayer, anchorX: 0.5, anchorY: 0.5, scale: 0.75 });
          ghost.alpha = 0.5;
          bindDrag(ghost, item);
        }

        const agent = Sprite(AGENT_TEXTURE, { x, y, layer: agentLayer, anchorX: 0.5, anchorY: 0.5, scale: 0.75 });
        agent.id = ID();
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
        if(paused) {
          if(fc >= dfc) {
            return;
          } else {
            fc += 1;
          }
        }


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
      
        console.log('||||||BEGIN AGENT ADVANCEMENT|||||');
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

          const circleBBs = agents.slice(0, i);
          //#endregion

          //#region Wall collision
          let nextBB = getBB(agent);
          console.log('agent is at', agent.x, agent.y);
          let collided = entityCollides(agent, nextBB, colliders, circleBBs);
          let c = 0;
          console.log('======= COLLISION ======');
          while(collided) {
            c++;
            if(c > 50) {
              console.log('TOO MANY COLLISIONS');
              paused = true;
              break;
            }

            if(collided.type === 'circle') {
              const { d } = collided;
              const distance = magnitude(d);
              console.log(`collided with a circle at [${collided.bb.x}, ${collided.bb.y}]`);
              const overlap = AGENT_RADIUS * 2 - distance;
              console.log(`d = [${d.x}, ${d.y}], m = ${distance}, overlap = ${overlap}`)
              if(overlap > 0.2) {
                agent.x += d.x / distance * overlap / 2;
                agent.y += d.y / distance * overlap / 2;
                collided.bb.x -= d.x / distance * overlap / 2;
                collided.bb.y -= d.y / distance * overlap / 2;
              }
              
            } else {
              console.log('collided with square', collided);
              console.log('nextBB', nextBB);
              const v = betweenBBs(prevBB, nextBB);
              agent.x += v.x / 2;
              agent.y += v.y / 2;
              // console.log('prevBB', prevBB);
              // // come from above
              // if(nextBB.bottom > collided.top && prevBB.bottom <= collided.top) {
              //   console.log(`agent collided with a box from above`);
              //   agent.y = collided.top - (agent.height * agent.scale.y) / 2;

              // // come from below
              // } else if(nextBB.top < collided.bottom && prevBB.top >= collided.bottom) {
              //   console.log(`agent collided with a box from below`);
              //   agent.y = collided.bottom + (agent.height * agent.scale.y) / 2;

              // } else if(nextBB.right > collided.left && prevBB.right <= collided.left) {
              //   console.log(`agent collided with a box from the left`);
              //   agent.x = collided.left - (agent.width * agent.scale.x) / 2;

              // } else if(nextBB.left < collided.right && prevBB.left >= collided.right) {
              //   console.log(`agent collided with a box from the right`);
              //   agent.x = collided.right + (agent.width * agent.scale.x) / 2;
              // }
            }

            nextBB = getBB(agent);
            collided = entityCollides(agent, nextBB, colliders, circleBBs);
          }

          console.log('======= END COLLISION ======');
        }
        console.log('||||||||END AGENT ADVANCEMENT||||||||');

        if(agents.every(agent => !agent.spooked)) {
          for(const agent of agents) {
            agent.spooked = true;
          }
        }

        //#region Fire
        fireSpreadTimer += delta;
        if(fireSpreadTimer > fireSpreadRate) {
          fireSpreadTimer = 0;
          const keys = Object.keys(fireIndex);
          keys.forEach(k => {
            const { x, y } = fireIndex[k];
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
          });
          keys.forEach(k => {
            delete fireIndex[k];
          })
        }
        //#endregion
      };

      app.ticker.add(step);
    }

    beginLevel();
}
