import GUI, { showGUI } from './gui.js';
import { loadAssets, getTexture, getSheet, getAnim, bindDrag } from './lib.js';
import { getBB, fakeBB, entityCollides, anyCollide } from './collision.js';
import {
  AGENT_TEXTURE
} from './assets.js';
import * as assets from './assets.js';
import { Sprite, AnimatedSprite } from './lib.js';
import Entity from './Entity.js';

const PLAYER_VELOCITY = 1.5;
const JUMP_VELOCITY = 10;
const GRAVITY = 1;

const traceConfig = {
  aim: false,
  collision: false
}

const cameraConfig = {
  scale: 2,
}

function container(parent) {
  const layer = new PIXI.Container();
  parent.addChild(layer);
  return layer;
}

export default function setup(app, level, devMode) {
    const dat = window.dat || null;
    GUI.init(dat);
    showGUI('camera', cameraConfig);

    function beginLevel() {
      const camera = container(app.stage);
      camera.scale.set(cameraConfig.scale);
      camera.interactive = true;

      const globalGuiLayer = container(app.stage);
      const entities = [];

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

      const step = delta => {
        camera.scale.set(cameraConfig.scale);
        const groundBBs = []; //collidables.map(x => ({...getBB(x), collidable: x}));

        draw.clear();

        if(traceConfig.collision) {
          for(const groundBB of groundBBs) {
            traceBB(groundBB, 0x00FFFF);
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
