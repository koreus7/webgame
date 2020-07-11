import GUI, { showGUI } from './gui.js';
import { loadAssets, getTexture, getSheet, getAnim, bindDrag } from './lib.js';
import { getBB, fakeBB, entityCollides, anyCollide } from './collision.js';
import {
  AGENT_TEXTURE,
  TILES_TEXTURE,
  TARGET_TEXTURE,
  NODE_TEXTURE
} from './assets.js';
import { Sprite, AnimatedSprite } from './lib.js';
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
      const globalGuiLayer = container(app.stage);
      const localGuiLayer = container(camera);
      const entities = [];
      const agents = [];
      const nodes = {};

      const res = app.loader.resources[TILES_TEXTURE];
      const tileNames = Object.keys(res.data.frames);
      const tileSize = 32;
      for(let i = 0; i < mapData.length; i++) {
        for(let j = 0; j < mapData[i].length; j++) {
          const tex = res.textures[tileNames[mapData[i][j]]];
          Sprite(tex, { x: i * tileSize + tileSize/2, y: j * tileSize, layer: mapLayer, drag: false });
        }
      }


      if(devMode) {
        let target = Sprite(TARGET_TEXTURE, { x: -100, y: -100, layer: globalGuiLayer, anchorX: 0.5, anchorY: 0.5 });

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
      }
      
      function makeAgent({ x, y }) {
        const agent = Sprite(AGENT_TEXTURE, { x, y, layer: agentLayer, anchorX: 0.5, anchorY: 0.5 });
        agents.push(agent);
      }

      for(let i = 0; i < 10; i++) {
        makeAgent({ x: 20 * i, y: 20 * i });
      }

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
          console.log('LEVEL', level);
          fetch(`/levels/${level.id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(level)
          }).then(() => alert('saved'));
        });
      }

      const draw = new PIXI.Graphics();
      globalGuiLayer.addChild(draw);

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

      if(devMode) {
        let drawingEdgeFrom = null;

        const insertables = [
          { type: 'node' },
        ];

        let xInsert = 300;
        const yInsert = app.view.height - 40;
        for(const i of insertables) {
          switch(i.type) {
            case 'node': {
              const sprite = Sprite(NODE_TEXTURE, { x: xInsert, y: yInsert, layer: globalGuiLayer, anchorY: 0.5, anchorX: 0.5 });
              xInsert += 75;
              sprite.interactive = true;
              sprite.on('click', (event) => {
                const x = (-camera.x + app.view.width / 2) / camera.scale.y;
                const y = app.view.height / 2 / camera.scale.x;
                const dupe = Sprite(NODE_TEXTURE, { x, y, layer: localGuiLayer, anchorY: 0.5, anchorX: 0.5 });
                const levelItem = { ...i, x, y };
                bindDrag(dupe, levelItem);
                level.contents.push(levelItem);
                dupe.on('click', (event) => {
                  if(event.data.originalEvent.ctrlKey) {
                    if(!drawingEdgeFrom) {
                      drawingEdgeFrom = dupe;
                    } else {

                    }
                  }
                });
              });
            }
          }
        }
      }


      const step = delta => {
        camera.scale.set(cameraConfig.scale);
        const groundBBs = []; //collidables.map(x => ({...getBB(x), collidable: x}));

        draw.clear();

        if(traceConfig.collision) {
          for(const groundBB of groundBBs) {
            traceBB(groundBB, 0x00FFFF);
          }
        }

        for(let i = 0; i < agents.length; i++) {
          const agent = agents[i];
          traceAgent(agent);

          if(agent.target) {
            const v = { x: agent.target.x - agent.x, y: agent.target.y - agent.y };
            const mag = Math.sqrt(v.x * v.x + v.y * v.y);
            v.x /= mag;
            v.y /= mag;
            const theta = Math.atan2(v.y, v.x);

            agent.angle = (theta * 180 / Math.PI) + 90;
            agent.x += v.x * delta * AGENT_SPEED;
            agent.y += v.y * delta * AGENT_SPEED;
            if(mag < TARGET_MET_DISTANCE) {
              agent.target = null;
            }
          }

          for(let j = 0; j < i; j++) {
            const dx = agents[j].x - agent.x;
            const dy = agents[j].y - agent.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const overlap = AGENT_RADIUS * 2 - distance;
            if(overlap > 0) {
              agents[j].x += dx / distance * overlap / 2;
              agents[j].y += dy / distance * overlap / 2;
              agent.x -= dx / distance * overlap / 2;
              agent.y -= dy / distance * overlap / 2;

            }
          }
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
