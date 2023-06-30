import GUI, { showGUI } from './gui.js';
import { loadAssets, getTexture, getSheet, getAnim, bindDrag } from './lib.js';
import { getBB, fakeBB, entityCollides, anyCollide } from './collision.js';
import Controls from './controls.js';
import Trigger from './trigger.js';
import {
  PLAYER_GHOST_TEXTURE,
  GROUND_TEXTURE,
  CABIN_TEXTURE,
  CANDLE_SHEET,
  CANDLE_LIGHT_TEXTURE,
  BARREL_TEXTURE,
  ENEMY_IDLE_TEXTURE,
  ENEMY_CORPSE_TEXTURE,
  ENEMY_DEATH_SHEET,
  CHARGER_SHEET,
  OVEN_TEXTURE,
  KNIFE_TEXTURE,
  OVEN_SHEET,
  INTERACT_TEXTURE,
  KNIFE_WOBBLE_SHEET,
  MEAT_0,
  MEAT_1,
  MEAT_2,
} from './assets.js';
import * as assets from './assets.js';
import { Sprite, AnimatedSprite } from './lib.js';
import Entity from './Entity.js';
import Player, { PS_DRAGGING, PS_IDLE, PS_JUMPING, PS_WALKING } from './entities/Player.js';
import Enemy, { EN_DEATH } from './entities/Enemy.js';
import Knife from './entities/Knife.js';
import Candle from './Candle.js';

const PLAYER_VELOCITY = 1.5;
const JUMP_VELOCITY = 10;
const GRAVITY = 1;

const traceConfig = {
  aim: false,
  collision: false
}

const cameraConfig = {
  scale: 2,
  panLeftBound: 0.25,
  panRightBound: 0.75,
}

const candleLightConfig = {
  xOffset: 0,
  yOffset: 10,
  alpha: 0.3,
}

const dragConfig = {
  corpseOffsetX: 25,
};

function container(parent) {
  const layer = new PIXI.Container();
  parent.addChild(layer);
  return layer;
}

function randomMeatTexture() {
  const randFloat = Math.random();
  if(randFloat < 0.3) return MEAT_0;
  if(randFloat < 0.6) return MEAT_1;
  return MEAT_2;
}

function randn_bm() {
  let u = 0, v = 0;
  while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while(v === 0) v = Math.random();
  let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  if (num > 1 || num < 0) return randn_bm(); // resample between 0 and 1
  return num;
}

export default function setup(app, level, devMode) {
    let selected = null;
    const dat = window.dat || null;
    GUI.init(dat);
    showGUI('camera', cameraConfig);
    showGUI('trace', traceConfig);
    showGUI('dragging', dragConfig);
    const candleGUI = GUI.addFolder('candle');
    candleGUI.add(candleLightConfig, 'xOffset').min(-64).max(64);
    candleGUI.add(candleLightConfig, 'yOffset').min(-64).max(64);
    candleGUI.add(candleLightConfig, 'alpha').min(0.01).max(1.0);

    function beginLevel() {
      const camera = container(app.stage);
      camera.scale.set(cameraConfig.scale);
      camera.interactive = true;

      const backgroundLayer = container(camera);
      const spriteLayer = container(camera);
      const knifeLayer = container(camera);
      const lightLayer = container(camera);
      const furnitureLayer = container(camera);
      const localGuiLayer = container(camera);
      const globalGuiLayer = container(app.stage);
      const controls = new Controls(app.view, camera);

      const getLayer = (layer) => {
        switch(layer) {
          case 'bg': return backgroundLayer;
          case 'furniture': return furnitureLayer;
          default: throw new Error(`unknown layer "${layer}" requested`);
        }
      }

      let pDir = 1;
      let pFacing = 1;

      // app.stage.worldTransform.scale(2, 2);
      const entities = new Set();
      let draggableCorpse = null;
      let dragMode = false;

      const steppables = [];
      const collidables = [];

      const dragPrompt = Sprite(INTERACT_TEXTURE);
      localGuiLayer.addChild(dragPrompt);

      let player;

      const resetBtn = new PIXI.Text('Reset');
      resetBtn.interactive = true;
      resetBtn.x = 10;
      resetBtn.y = document.body.clientHeight - 100;
      globalGuiLayer.addChild(resetBtn);
      resetBtn.on('click', (event) => {
        app.stage.removeChild(camera);
        app.ticker.remove(step);
        controls.destroy();
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

      const insertSprite = (item) => {
        const { id, layer, x, y } = item;
        const sprite = Sprite(`./assets/images/${id}.png`, { x, y });
        if(layer === 'furniture') {
          collidables.push(sprite);
        }
        getLayer(layer).addChild(sprite);
        devMode && bindDrag(sprite, item);
      }

      for(const item of level.contents) {
        const { x, y, type } = item;
        switch(type) {
          case 'sprite': {
            insertSprite(item);
            break;
          }

          case 'player': {
            const ghost = Sprite(PLAYER_GHOST_TEXTURE, { x, y, layer: spriteLayer });
            ghost.alpha = 0.5;
            ghost.visible = devMode;
            devMode && bindDrag(ghost, item);

            player = new Player({ x, y, layer: spriteLayer });
            entities.add(player);
            break;
          }

          case 'candle': {
            const candle = new Candle({ x, y, backgroundLayer, lightLayer, candleLightConfig });
            steppables.push(candle);
            devMode && bindDrag(candle.candle, item);
            break;
          }

          case 'enemy': {
            const ghost = Sprite(ENEMY_IDLE_TEXTURE, { x, y, speed: 0.2, layer: spriteLayer })
            ghost.alpha = 0.5;
            ghost.visible = devMode;
            devMode && bindDrag(ghost, item);

            const enemy = new Enemy({ x, y, layer: spriteLayer });
            enemy.onDie(() => {
              enemy.destroy();
              entities.delete(enemy);

              const mask = new PIXI.Graphics();
              mask.beginFill(0xFFFFFF);
              mask.drawRect(enemy.state.x - 20, enemy.state.y, 40, enemy.state.height - 10);
              knifeLayer.addChild(mask);
              const knife = new Knife({ player, layer: knifeLayer, frozen: true, x: enemy.state.x + 3, y: enemy.state.y + enemy.state.height - 12 });
              knife.setState('glow');
              knife.state.angle = 180;
              knife.state.scale.x *= -1;
              knives.add(knife);
              knife.state.mask = mask;

              const corpseStates = {
                dead: Sprite(ENEMY_CORPSE_TEXTURE),
              }
              const corpse = new Entity('corpse', corpseStates, 'dead', { x: enemy.state.x, layer: spriteLayer });
              corpse.state.y = enemy.state.y + enemy.state.height - corpse.state.height;
              const triggerZone = new Trigger({ localX: -15, localY: 0, width: 20, height: 20 },
                {
                  onEnter: () => {
                      draggableCorpse = corpse;
                  },
                  onExit: () => {
                    if(!dragMode) {
                      draggableCorpse = null;
                    }
                  },
              });
              corpse.addTrigger(triggerZone);

              entities.add(corpse);
            });
            entities.add(enemy);
            break;
          }
          case 'oven': {
            const oven = AnimatedSprite(OVEN_SHEET, { x, y, speed: 0.15, loop: false });
            devMode && bindDrag(oven, item);
            collidables.push(oven);
            furnitureLayer.addChild(oven);
            break;
          }
        }
      }

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

      const charger = player.charger = container(localGuiLayer);
      const chargerAnim = charger.cone = AnimatedSprite(CHARGER_SHEET, { x: 10, visible: false, speed: 0.075, anchorX: 0, anchorY: 0.5, layer: charger });

      if(devMode) {
        const insertables = [
          { type: 'sprite', id: 'cabin', layer: 'bg' },
          { type: 'sprite', id: 'ground', layer: 'furniture' },
        ];

        let xInsert = 300;
        const yInsert = app.view.height - 40;
        for(const i of insertables) {
          switch(i.type) {
            case 'sprite': {
              const sprite = Sprite(`./assets/images/${i.id}.png`, { x: xInsert, y: yInsert, layer: globalGuiLayer });
              const scale = sprite.width > sprite.height ? sprite.width / 50 : sprite.height / 50;
              sprite.width /= scale;
              sprite.height /= scale;
              sprite.y -= sprite.height / 2;
              xInsert += 75;
              sprite.interactive = true;
              sprite.on('click', () => {
                const x = (-camera.x + app.view.width / 2) / camera.scale.y;
                const y = app.view.height / 2 / camera.scale.x;
                const dupe = Sprite(`./assets/images/${i.id}.png`, { x, y, layer: getLayer(i.layer) });
                dupe.y -= dupe.height / 2;
                if(i.layer === 'furniture') {
                  collidables.push(dupe);
                }
                const levelItem = { ...i, x, y };
                bindDrag(dupe, levelItem);
                level.contents.push(levelItem);
              });
              break;
            }
          }
        }
      }

      const pKnifeSprites = [];
      for(let i = 0; i < player.knives; i++) {
        const knifeTally = Sprite(KNIFE_TEXTURE);
        knifeTally.scale.set(4);
        globalGuiLayer.addChild(knifeTally);
        knifeTally.angle = 45;
        knifeTally.x = app.view.width - 100 + (i * (knifeTally.width + 20));
        knifeTally.y = app.view.height - 50;
        pKnifeSprites.push(knifeTally);
      }

      const draw = new PIXI.Graphics();
      localGuiLayer.addChild(draw);

      let aiming = false;

      const knives = new Set();

      const step = delta => {
        camera.scale.set(cameraConfig.scale);
        const groundBBs = collidables.map(x => ({...getBB(x), collidable: x}));

        dragPrompt.visible = !!draggableCorpse && !dragMode;
        if(dragPrompt.visible) {
          dragPrompt.x = player.state.x + player.facing * -3;
          dragPrompt.y = player.state.y - 45;
        }

        if(controls.interact && draggableCorpse && !dragMode) {
          dragMode = true;
          draggableCorpse.gravityEnabled = false;
          pFacing = -pFacing;
        }

        if(controls.drop && dragMode) {
          dragMode = false;
          draggableCorpse.gravityEnabled = true;
          player.velocity.x = 0;
          player.setState(PS_IDLE);
        }

        if(dragMode) {
          draggableCorpse.state.x = player.state.x -dragConfig.corpseOffsetX * pFacing;
          draggableCorpse.state.y = player.state.y + player.state.height - draggableCorpse.state.height;
          draggableCorpse.setFacing(-pFacing);
        }

        draw.clear();
        const prevDir = pDir;

        pDir = controls.getDirection();
        if(pDir) {
          pFacing = pDir;
        }

        player.velocity.x = pDir * 5;

      if(controls.mouse) {
        const mousePos = { x: controls.mouse.x / camera.scale.x - camera.x / camera.scale.x, y: controls.mouse.y / camera.scale.x - camera.y / camera.scale.x };
        if(traceConfig.aim) {
          draw.lineStyle(1, 0).moveTo(charger.x, charger.y).lineTo(mousePos.x, mousePos.y);
        }
        const v = { x: mousePos.x - charger.x, y: mousePos.y - charger.y };
        const mag = Math.sqrt(v.x * v.x + v.y * v.y);
        v.x /= mag;
        v.y /= mag;
        const theta = Math.atan2(v.y, v.x);
        charger.angle = theta * 180 / Math.PI;

        if(controls.aiming && !aiming && player.knives > 0) {
          chargerAnim.gotoAndPlay(0);
          chargerAnim.loop = false;
          chargerAnim.visible = true;
          aiming = true;
        }

        if(aiming && !controls.aiming) {
          if(dragMode) {
            dragMode = false;
            draggableCorpse.velocity.x = (v.x * (chargerAnim.currentFrame + 1) * 3.5);
            draggableCorpse.velocity.y = (v.y * (chargerAnim.currentFrame + 1) * 3.5);
            draggableCorpse.gravityEnabled = true;
            draggableCorpse = null;

          } else {
            player.knives = player.knives - 1;
            pKnifeSprites[player.knives].alpha = 0.25;
            const knife = new Knife({ layer: knifeLayer, x: player.charger.x, y: player.charger.y });
            knife.velocity.x = (v.x * (player.charger.cone.currentFrame + 1) * 2);
            knife.velocity.y = (v.y * (player.charger.cone.currentFrame + 1) * 2);
            knives.add(knife);
          }

          aiming = false;
          chargerAnim.gotoAndStop(0);
          chargerAnim.visible = false;
        }
      }

      for(const steppable of steppables) {
        steppable.step();
      }

        for(const knife of knives) {
          if(knife.frozen) {
            const pickupBB = fakeBB(knife.state, 30, 30);
            traceBB(pickupBB, 0xffff00);

            if(anyCollide(pickupBB, [getBB(player)])) {
              pKnifeSprites[player.knives].alpha = 1;
              player.knives = player.knives + 1;
              knife.destroy();
              knives.delete(knife);
            }

            if(knife.embedded) {
              knife.state.x = knife.embedded.state.x + knife.hitPoint.x;
              knife.state.y = knife.embedded.state.y + knife.hitPoint.y;
            }

            continue;
          };

          knife.velocity.y += GRAVITY / 3 * delta;
          knife.state.x += knife.velocity.x * delta;
          knife.state.y += knife.velocity.y * delta;
          knife.state.angle = 90 + (Math.atan2(knife.velocity.y, knife.velocity.x) * 180 / Math.PI);

          const nextPos = {
            x: knife.state.x + knife.velocity.x * delta,
            y: knife.state.y + knife.velocity.y * delta
          };

          let nextBB = fakeBB(nextPos, 10, 10);
          traceBB(nextBB, 0xff0000);
          const enemyBBs = Array.from(entities)
            .filter(entity => entity.name === 'enemy')
            .map(entity => ({ entity, ...getBB(entity) }));

          const hit = entityCollides(nextBB, enemyBBs);
          if(hit) {
            const deadFella = hit.entity;
            deadFella.setState(EN_DEATH);
            deadFella.velocity.x = -5;
            knife.destroy();
            knives.delete(knife);
            continue;
          }

          if(anyCollide(nextBB, groundBBs)) {
            knife.freeze();

            while(anyCollide(nextBB, groundBBs)) {
              nextPos.x -= knife.velocity.x * delta / 5;
              nextPos.y -= knife.velocity.y * delta / 5;
              nextBB = fakeBB(nextPos, 10, 10);
            }
            nextPos.x += knife.velocity.x * delta / 3;
            nextPos.y += knife.velocity.y * delta / 3;
          }

          knife.state.x = nextPos.x;
          knife.state.y = nextPos.y;
        }

        if(traceConfig.collision) {
          for(const groundBB of groundBBs) {
            traceBB(groundBB, 0x00FFFF);
          }
        }

        for(const entity of entities) {
          if(entity === player && entity.isGrounded && controls.jump) {
            player.velocity.y = -JUMP_VELOCITY;
            player.setState(PS_JUMPING);

          } else if(entity.gravityEnabled) {
            entity.velocity.y += GRAVITY * delta;
          }

          entity.updateTriggers(traceBB, player);
          const prevBB = getBB(entity);
          entity.state.x += entity.velocity.x * delta;
          entity.state.y += entity.velocity.y * delta;
          let nextBB = getBB(entity);
          entity.isGrounded = false;
          let collided = entityCollides(nextBB, groundBBs);
          let i = 0;
          while(collided) {
            i++;
            if(i > 5) {
              console.log('TOO MANY COLLISIONS');
              console.log(entity.name, collided.name);
              break;
            }
            if(entity.name === 'corpse' && collided.name === 'oven') {
              console.log("Corpse Oven");
              const oven = collided.collidable;
              oven.play();
              oven.onComplete = () => {
                for(let i = 0; i < 5; i++) {
                    const meatStates = {
                      meaty: Sprite(randomMeatTexture()),
                    }
                    const meat = new Entity('meat', meatStates, 'meaty', { x: oven.x, y: oven.y, layer: spriteLayer });
                    meat.setVelocity({ x: 10 + randn_bm()*10.0 });
                    entities.add(meat);
                }
              }
              const corpse = entity;
              dragMode = false;
              corpse.destroy();
              entities.delete(corpse);
              break;
            }

            let fixed = false;

            // come from above
            if(nextBB.bottom > collided.top && prevBB.bottom <= collided.top) {
              entity.state.y = collided.top - entity.state.height;
              nextBB = getBB(entity);
              entity.velocity.y = 0;
              entity.isGrounded = true;
              fixed = true;
              if(entity !== player) {
                entity.velocity.x *= 0.9;
              }


            // come from below
            } else if(nextBB.top < collided.bottom && prevBB.top >= collided.bottom) {
              entity.state.y = collided.bottom;
              nextBB = getBB(entity);
              entity.velocity.y = 0;
              entity.isGrounded = true;
              fixed = true;

            } else if(nextBB.right > collided.left && prevBB.right <= collided.left) {
              entity.state.x = collided.left - entity.state.width / 2;
              nextBB = getBB(entity);
              entity.velocity.x = 0;
              fixed = true;

            } else if(nextBB.left < collided.right && prevBB.left >= collided.right) {
              entity.state.x = collided.right + entity.state.width / 2;
              nextBB = getBB(entity);
              entity.velocity.x = 0;
              fixed = true;
            }

            nextBB = getBB(entity);
            collided = fixed ? entityCollides(nextBB, groundBBs) : null;
          }
          traceBB(nextBB, 0x00ff00);
        }

        if(!player.isGrounded && player.stateName !== PS_JUMPING && player.stateName != PS_DRAGGING) {
          player.setState(PS_JUMPING);

        } else if(player.isGrounded && player.stateName === PS_JUMPING) {
          if(pDir === 0) {
            player.setState(PS_IDLE);

          } else {
            player.setState(dragMode ? PS_DRAGGING : PS_WALKING);
          }
        } else if(pDir !== prevDir) {
          if(pDir === 0) {
            player.setState(PS_IDLE);

          } else {
            player.setState(dragMode ? PS_DRAGGING : PS_WALKING);
          }
        }

        // Camera
        const playerOffset = player.state.x + camera.x / camera.scale.x;
        const moveRightAmount = playerOffset - (app.view.width / camera.scale.x * cameraConfig.panRightBound);
        if(moveRightAmount > 0) {
          camera.x -= moveRightAmount * camera.scale.x;
        }

        const moveLeftAmount = playerOffset - (app.view.width / camera.scale.x * cameraConfig.panLeftBound);
        if(moveLeftAmount < 0 && camera.x < 0) {
          camera.x = Math.min(0, camera.x - moveLeftAmount * camera.scale.x);
        }

        player.setFacing(pFacing);
        charger.x = player.state.x;
        charger.y = player.state.y + 20;
      };

      app.ticker.add(step);
    }

    beginLevel();
}
