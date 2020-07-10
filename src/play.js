import GUI, { showGUI } from './gui.js';
import { loadAssets, getTexture, getSheet, getAnim, bindDrag } from './lib.js';
import { getBB, fakeBB, entityCollides, anyCollide } from './collision.js';
import {
  AGENT_TEXTURE,
  TILES_TEXTURE,
  TARGET_TEXTURE
} from './assets.js';
import * as assets from './assets.js';
import { Sprite, AnimatedSprite } from './lib.js';
import Entity from './Entity.js';

const AGENT_RADIUS = 16;

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

let mapData = [[[1,11],[1,11],[1,11],[1,11],[1,11],[1,11],[1,11],[1,11],[6,6],[7,6],[8,6],[1,11],[1,11],[1,11],[1,11],[1,11]],
[[1,11],[0,0],[1,0],[1,0],[2,0],[1,11],[1,11],[1,11],[6,6],[7,6],[8,6],[1,11],[1,11],[1,11],[1,11],[1,11]],
[[1,11],[0,1],[1,1],[1,1],[2,1],[1,11],[1,11],[1,11],[6,6],[8,8],[8,6],[1,11],[1,11],[1,11],[1,11],[1,11]],
[[1,11],[0,1],[1,1],[0,3],[5,2],[1,11],[13,12],[13,12],[6,6],[7,6],[6,9],[1,11],[1,11],[1,11],[1,11],[1,11]],
[[1,11],[0,1],[1,1],[2,1],[1,11],[1,11],[13,15],[13,15],[6,6],[7,6],[7,6],[6,9],[1,11],[1,11],[1,11],[1,11]],
[[1,11],[0,2],[1,2],[2,2],[1,11],[1,11],[14,2],[15,2],[6,6],[7,6],[7,6],[7,6],[6,9],[8,5],[1,11],[1,11]],
[[1,11],[1,11],[1,11],[1,11],[1,11],[1,11],[1,11],[1,11],[6,6],[8,8],[7,6],[7,6],[7,6],[8,6],[1,11],[1,11]],
[[4,5],[2,5],[0,5],[1,5],[2,5],[1,11],[1,11],[1,11],[6,7],[7,8],[7,6],[7,6],[8,9],[6,9],[8,5],[1,11]],
[[2,8],[3,9],[4,9],[4,6],[3,9],[5,0],[1,11],[1,11],[1,11],[6,7],[7,8],[7,6],[7,6],[8,8],[8,6],[1,11]],
[[4,7],[4,7],[4,8],[5,8],[2,9],[3,9],[4,5],[2,5],[1,11],[1,11],[6,7],[7,8],[7,6],[7,6],[6,9],[8,5]],
[[1,11],[1,11],[3,7],[4,7],[4,8],[5,9],[5,8],[0,9],[2,5],[1,11],[1,11],[6,7],[7,8],[7,6],[7,6],[6,9]],
[[1,11],[1,11],[1,11],[1,11],[0,7],[4,8],[4,6],[4,6],[5,1],[1,11],[1,11],[1,11],[6,7],[7,8],[7,6],[7,6]],
[[1,11],[9,0],[10,0],[8,0],[1,11],[3,7],[1,7],[1,7],[5,7],[1,11],[1,11],[1,11],[1,11],[6,7],[7,7],[7,7]],
[[1,11],[9,1],[11,3],[11,1],[1,11],[1,11],[1,11],[1,11],[1,11],[1,11],[1,11],[1,11],[1,11],[1,11],[1,11],[1,11]],
[[1,11],[9,2],[7,2],[11,2],[1,11],[1,11],[1,11],[2,12],[1,13],[1,13],[1,13],[1,13],[1,13],[1,13],[0,12],[1,11]],
[[1,11],[1,11],[1,11],[1,11],[1,11],[1,11],[1,11],[2,10],[3,10],[3,10],[3,10],[3,10],[3,10],[3,10],[0,10],[1,11]]];


const parseMap = (map) =>
{
    var data = [];
    let count = 0;

    for (var i = 0; i < map.length; i++)
    {
        for (var j = 0; j < map[i].length; j++)
        {
            data[count++] = map[i][j][0];
            data[count++] = 0
            data[count++] = 0;
            data[count++] = map[i][j][1];
        }
    }

    return new Uint8Array( data )
}
const frag = `
      precision mediump float;
      uniform sampler2D map, tiles;
      uniform vec2 mapSize, tileSize;
      varying vec2 uv;
      void main() {
        vec2 tileCoord = floor(255.0 * texture2D(map, floor(uv) / mapSize).ra);
        gl_FragColor = texture2D(tiles, (tileCoord + fract(uv)) / tileSize);
      }`;

const vert = `
      precision mediump float;
      attribute vec2 position;
      uniform vec4 view;
      varying vec2 uv;
      void main() {
        uv = mix(view.xw, view.zy, 0.5 * (1.0 + position));
        gl_Position = vec4(position, 1, 1);
      }`;

export default function setup(app, level, devMode) {
    const dat = window.dat || null;
    GUI.init(dat);
    showGUI('trace', traceConfig);
    showGUI('camera', cameraConfig);

    function beginLevel() {

      const mapWidth = mapData[0].length;
      const mapHeight =  mapData.length;
      const map = PIXI.BaseTexture.fromBuffer(  parseMap(mapData) , mapWidth, mapHeight );
      const tiles = PIXI.Texture.from(TILES_TEXTURE);
      tiles.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
      tiles.baseTexture.mipmap = PIXI.MIPMAP_MODES.OFF;

      const shader = PIXI.Shader.from(vert, frag, {
        map,
        tiles,
        tileSize: [16.0, 16.0],
        mapSize: [mapWidth, mapHeight],
        view:[0,0,0,0]
      })

      const geometry = new PIXI.Geometry()
      .addAttribute('position', [ -1, -1, 1, -1, -1, 1, 1, 1, -1, 1, 1, -1 ]);

      const tileMesh = new PIXI.Mesh(geometry, shader);

      app.stage.addChild(tileMesh);




      const camera = container(app.stage);
      camera.scale.set(cameraConfig.scale);
      camera.interactive = true;

      const agentLayer = container(camera);
      const globalGuiLayer = container(app.stage);
      const entities = [];
      const agents = [];

      let target = Sprite(TARGET_TEXTURE, { x: 100, y: 50, layer: globalGuiLayer, anchorX: 0.5, anchorY: 0.5 });

      app.view.addEventListener('click', (event) => {
        const bb = app.view.getBoundingClientRect();
        target.x = event.clientX - bb.left;
        target.y = event.clientY - bb.top;
      });
      
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
          agent.target = { x: target.x, y: target.y };

          const v = { x: agent.target.x - agent.x, y: agent.target.y - agent.y };
          const mag = Math.sqrt(v.x * v.x + v.y * v.y);
          v.x /= mag;
          v.y /= mag;
          const theta = Math.atan2(v.y, v.x);

          if(mag > AGENT_RADIUS) {
            agent.angle = (theta * 180 / Math.PI) + 90;
            agent.x += v.x * delta;
            agent.y += v.y * delta;
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

        const boxX = mapWidth / app.screen.width;
        const boxY = mapHeight / app.screen.height;
        const boxH = 10;
        const boxW = app.screen.width / app.screen.height * boxH;

        shader.uniforms.view = [boxX - 0.5 * boxW,
                                boxY - 0.5 * boxH,
                                boxX + 0.5 * boxW,
                                boxY + 0.5 * boxH];

      };

      app.ticker.add(step);
    }

    beginLevel();
}
