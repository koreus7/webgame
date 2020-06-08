import GUI, { showGUI } from './gui.js';
import { loadAssets, getTexture, getSheet, getAnim } from './lib.js';
import { getBB, fakeBB, entityCollides, anyCollide } from './collision.js';
import Controls from './controls.js';
import Trigger from './trigger.js';
import {
  GROUND_TEXTURE,
  CABIN_TEXTURE,
  CANDLE_TEXTURE,
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
} from './assets.js';
import * as assets from './assets.js';
import { Sprite, AnimatedSprite } from './lib.js';
import Entity from './Entity.js';
import Player, { PS_DRAGGING, PS_IDLE, PS_JUMPING, PS_WALKING } from './entities/Player.js';
import Enemy, { EN_DEATH } from './entities/Enemy.js';
import Knife from './entities/Knife.js';

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

const app = window.app = new PIXI.Application({
  backgroundColor: 0x00ffff,
  width: document.body.clientWidth - 40,
  height: document.body.clientHeight - 40,
});

app.view.style.margin = '20px';

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

document.body.appendChild(app.view);

function container(parent) {
  const layer = new PIXI.Container();
  parent.addChild(layer);
  return layer;
}

loadAssets(
  assets,
  setup
);

function setup() {
    const dat = window.dat || null;
    GUI.init(dat);
    showGUI('camera', cameraConfig);
    showGUI('trace', traceConfig);

    const scene = container(app.stage);
    scene.scale.set(cameraConfig.scale);
    const backgroundLayer = container(scene);
    const spriteLayer = container(scene);
    const knifeLayer = container(scene);
    const lightLayer = container(scene);
    const furnitureLayer = container(scene);
    const localGuiLayer = container(scene);
    const globalGuiLayer = container(app.stage);

    // app.stage.worldTransform.scale(2, 2);
    const controls = new Controls(app.view);
    const entities = new Set();
    let draggableCorpse = null;
    let dragMode = false;

    const cabin = Sprite(CABIN_TEXTURE, { layer: backgroundLayer });
    cabin.x = cabin.width * 0.5;
    const cabin2 = Sprite(CABIN_TEXTURE, { layer: backgroundLayer });
    cabin2.x = cabin.width * 1.5;

    const candle = AnimatedSprite(CANDLE_SHEET, 'candle_animated', { x: 120, y: 43, speed: 0.2, layer: backgroundLayer });
    candle.play();

    const player = new Player({ x: 100, y: 25, layer: spriteLayer });
    let pDir = 1;
    let pFacing = 1;
    let pKnives = 3;

    const enemy = new Enemy({ x: 500, y: 0, layer: spriteLayer });

    enemy.onDie(() => {
      enemy.destroy();
      entities.delete(enemy);
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
      
      showGUI('dragTrigger', triggerZone, ['localX', 'localY', 'width', 'height']);

      entities.add(corpse);
    });

    const dragPrompt = Sprite(INTERACT_TEXTURE);
    localGuiLayer.addChild(dragPrompt);

    const dragConfig = {
      corpseOffsetX: 25,
      corpseOffsetFlipX: -48,
      corpseOffsetY: 0,
    };

    showGUI('dragging', dragConfig);

    entities.add(player);
    entities.add(enemy);

    const barrel = Sprite(BARREL_TEXTURE, { x: 500, y: 83 });
    furnitureLayer.addChild(barrel);
    showGUI('barrel', barrel, [{ name: 'x', min: 0, max: 800 }, { name: 'y', min: 0, max: 200 }]);

    const oven = AnimatedSprite(OVEN_SHEET, 'oven', { x: 30, y: 41, speed: 0.15 });
    oven.play();
    furnitureLayer.addChild(oven);
    showGUI('oven', oven, [{ name: 'x', min: 0, max: 800 }, { name: 'y', min: 0, max: 200 }]);

    const ground = Sprite(GROUND_TEXTURE, { x: 100, y: 128 });
    ground.width = 2000;
    ground.x = ground.width / 2;
    furnitureLayer.addChild(ground);

    const candleLightConfig = {
      xOffset: 0,
      yOffset: 10,
      alpha: 0.3,
    }

    const candleLight = Sprite(CANDLE_LIGHT_TEXTURE);
    candleLight.anchor.y = 0.5;
    candleLight.blendMode = PIXI.BLEND_MODES.LIGHTEN;
    lightLayer.addChild(candleLight);

    const candleGUI = GUI.addFolder('candle');
    candleGUI.add(candle, 'x').min(0).max(200);
    candleGUI.add(candle, 'y').min(0).max(200);
    candleGUI.add(candle, 'animationSpeed').min(0).max(1);
    candleGUI.add(candleLightConfig, 'xOffset').min(-64).max(64);
    candleGUI.add(candleLightConfig, 'yOffset').min(-64).max(64);
    candleGUI.add(candleLightConfig, 'alpha').min(0.01).max(1.0);

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
    const chargerAnim = charger.cone = AnimatedSprite(CHARGER_SHEET, 'charger', { x: 10, visible: false, speed: 0.075, anchorX: 0, anchorY: 0.5, layer: charger });

    const pKnifeSprites = [];
    for(let i = 0; i < pKnives; i++) {
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

    app.ticker.add(delta => {
      scene.scale.set(cameraConfig.scale);
      const groundBBs = [getBB(ground), getBB(barrel), getBB(oven)];

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
      const mousePos = { x: controls.mouse.x / scene.scale.x - scene.x / scene.scale.x, y: controls.mouse.y / scene.scale.x - scene.y / scene.scale.x };
      if(traceConfig.aim) {
        draw.lineStyle(1, 0).moveTo(charger.x, charger.y).lineTo(mousePos.x, mousePos.y);
      }
      const v = { x: mousePos.x - charger.x, y: mousePos.y - charger.y };
      const mag = Math.sqrt(v.x * v.x + v.y * v.y);
      v.x /= mag;
      v.y /= mag;
      const theta = Math.atan2(v.y, v.x);
      charger.angle = theta * 180 / Math.PI;

      if(controls.aiming && !aiming && pKnives > 0) {
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
          pKnives--;
          pKnifeSprites[pKnives].alpha = 0.25;
          const knife = new Knife({ player, layer: knifeLayer, vector: v });
          knives.add(knife);
        }

        aiming = false;
        chargerAnim.gotoAndStop(0);
        chargerAnim.visible = false;
      }
    }

      candleLight.x = candle.x + candleLightConfig.xOffset;
      candleLight.y = candle.y + candleLightConfig.yOffset;
      candleLight.alpha = candleLightConfig.alpha;

      for(const knife of knives) {
        if(knife.frozen || knife.embedded) {
          const pickupBB = fakeBB(knife.state, 30, 30);
          traceBB(pickupBB, 0xffff00);

          if(anyCollide(pickupBB, [getBB(player)])) {
            pKnifeSprites[pKnives].alpha = 1;
            pKnives++;
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

        const hits = entityCollides(nextBB, enemyBBs);
        if(hits.length) {
          const deadFella = hits[0].entity;
          knife.embedded = deadFella;
          knife.hitPoint = { x: knife.state.x - deadFella.state.x, y: knife.state.y - deadFella.state.y };
          const initialRotation = knife.state.angle;
          deadFella.setState(EN_DEATH);
          deadFella.velocity.x = -5;

          continue;
        }

        if(anyCollide(nextBB, groundBBs)) {
          knife.frozen = true;

          while(anyCollide(nextBB, groundBBs)) {
            nextPos.x -= knife.velocity.x * delta / 5;
            nextPos.y -= knife.velocity.y * delta / 5;
            nextBB = fakeBB(nextPos, 10, 10);
          }
          nextPos.x += knife.velocity.x * delta / 3;
          nextPos.y += knife.velocity.y * delta / 3;
        }

        knife.setState('wobble');
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
        const collisions = entityCollides(nextBB, groundBBs);
        for(const collided of collisions) {
          if(entity.name === 'corpse' && collided.name === 'oven') {
            // TODO: Corpse goes in oven!
            continue;
          }

          if(nextBB.bottom > collided.top && prevBB.bottom <= collided.top) {
            entity.state.y = collided.top - entity.state.height;
            entity.velocity.y = 0;
            entity.isGrounded = true;
            if(entity !== player) {
              entity.velocity.x *= 0.9;
            }

          } else if(nextBB.top < collided.bottom && prevBB.top >= collided.bottom) {
            entity.state.y = collided.bottom;
            entity.velocity.y = 0;
            entity.isGrounded = true;

          } else if(nextBB.right > collided.left && prevBB.right <= collided.left) {
            entity.state.x = collided.left - entity.state.width / 2;
            entity.velocity.x = 0;

          } else if(nextBB.left < collided.right && prevBB.left >= collided.right) {
            entity.state.x = collided.right + entity.state.width / 2;
            entity.velocity.x = 0;
          }
          nextBB = getBB(entity);
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
      const playerOffset = player.state.x + scene.x / scene.scale.x;
      const moveRightAmount = playerOffset - (app.view.width / scene.scale.x * cameraConfig.panRightBound);
      console.log(moveRightAmount);
      if(moveRightAmount > 0) {
        scene.x -= moveRightAmount * scene.scale.x;
      }

      const moveLeftAmount = playerOffset - (app.view.width / scene.scale.x * cameraConfig.panLeftBound);
      if(moveLeftAmount < 0 && scene.x < 0) {
        scene.x = Math.min(0, scene.x - moveLeftAmount * scene.scale.x);
      }

      player.setFacing(pFacing);
      charger.x = player.state.x;
      charger.y = player.state.y + 20;
    });
}
