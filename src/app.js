import GUI from './gui.js';
import { loadAssets, getTexture, getSheet, getAnim } from './lib.js';
import { getBB, fakeBB, entityCollides, anyCollide } from './collision.js';
import Controls from './controls.js';
import Trigger from './trigger.js';
import assetList, {
  PLAYER_IDLE_SHEET,
  PLAYER_JUMP_TEXTURE,
  PLAYER_RUN_SHEET,
  PLAYER_DRAG_SHEET,
  GROUND_TEXTURE,
  CABIN_TEXTURE,
  CANDLE_TEXTURE,
  CANDLE_SHEET,
  CANDLE_LIGHT_TEXTURE,
  BARREL_TEXTURE,
  ENEMY_IDLE_TEXTURE,
  ENEMY_CORPSE_TEXTURE,
  CHARGER_SHEET,
  OVEN_TEXTURE,
  KNIFE_TEXTURE,
  OVEN_SHEET,
  ENEMY_DEATH_SHEET,
} from './assets.js';
import { Sprite, AnimatedSprite } from './lib.js';
import Entity from './Entity.js';

const PLAYER_VELOCITY = 2;
const JUMP_VELOCITY = 10;
const GRAVITY = 1;

const PS_IDLE = 'IDLE';
const PS_WALKING = 'WALKING';
const PS_JUMPING = 'JUMPING';
const PS_DRAGGING  = 'DRAGGING';


const EN_IDLE = 'IDLE';
const EN_DEATH = 'DEATH';

const traceConfig = {
  aim: false,
  collision: false
}

const app = window.app = new PIXI.Application({
  backgroundColor: 0,
  width: document.body.clientWidth,
  height: document.body.clientHeight,
});

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

document.body.appendChild(app.view);

loadAssets(
  assetList,
  setup
);

function setup() {
    const dat = window.dat || null;
    GUI.init(dat);

    // app.stage.worldTransform.scale(2, 2);
    const controls = new Controls(app.view);
    const entities = new Set();
    let draggableCorpse = null;
    let dragMode = false;

    const cabin = Sprite(CABIN_TEXTURE);
    cabin.x = cabin.width / 2;
    app.stage.addChild(cabin);
    const cabin2 = Sprite(CABIN_TEXTURE);
    cabin2.x = cabin.width * 1.5;
    app.stage.addChild(cabin2);

    const candleSheet = getSheet(CANDLE_SHEET);
    const candle = AnimatedSprite(getAnim(candleSheet, 'candle_animated'), { x: 120, y: 43 });
    candle.animationSpeed = 0.2;
    candle.play();
    app.stage.addChild(candle);

    const runSheet = getSheet(PLAYER_RUN_SHEET);
    const idleSheet = getSheet(PLAYER_IDLE_SHEET);
    const dragSheet = getSheet(PLAYER_DRAG_SHEET);

    const playerStates = {
      [PS_IDLE]: AnimatedSprite(getAnim(idleSheet, 'idle'), { speed: 0.2 }),
      [PS_JUMPING]: Sprite(PLAYER_JUMP_TEXTURE),
      [PS_WALKING]: AnimatedSprite(getAnim(runSheet, 'run'), { speed: 0.2 }),
      [PS_DRAGGING]: AnimatedSprite(getAnim(dragSheet, 'drag'), { speed: 0.2 } ),
    };

    const player = new Entity(playerStates, PS_IDLE, { x: 100, y: 25 });
    let pDir = 1;
    let pFacing = 1;
    let pKnives = 3;

    const deathSheet = getSheet(ENEMY_DEATH_SHEET);
    const enemyStates = {
      [EN_IDLE]: Sprite(ENEMY_IDLE_TEXTURE),
      [EN_DEATH]: AnimatedSprite(getAnim(deathSheet, 'enemy-death'), { loop: false, speed: 0.5 }),
    };

    const enemy = new Entity(enemyStates, EN_IDLE, { x: 500, y: 0 });

    enemyStates[EN_DEATH].onComplete = () => {
      enemy.destroy();
      entities.delete(enemy);
      const corpseStates = {
        dead: Sprite(ENEMY_CORPSE_TEXTURE),
      }
      const corpse = new Entity(corpseStates, 'dead', { x: enemy.state.x });
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
      
      const dragTriggerGUI = GUI.addFolder('dragTrigger');
      dragTriggerGUI.add(triggerZone, 'localX');
      dragTriggerGUI.add(triggerZone, 'localY');
      dragTriggerGUI.add(triggerZone, 'width');
      dragTriggerGUI.add(triggerZone, 'height');

      entities.add(corpse);
    };

    const dragText = new PIXI.Text(`Press E to drag`);
    app.stage.addChild(dragText);

    const dragConfig = {
      corpseOffsetX: 25,
      corpseOffsetFlipX: -48,
      corpseOffsetY: 0,
    };
    const dragGUI = GUI.addFolder('dragging');
    dragGUI.add(dragConfig, 'corpseOffsetX').min(0).max(64);
    dragGUI.add(dragConfig, 'corpseOffsetFlipX').min(-64).max(64);
    dragGUI.add(dragConfig, 'corpseOffsetY').min(0).max(64);

    entities.add(player);
    entities.add(enemy);

    const knifeIndex = app.stage.children.length;

    const barrel = Sprite(BARREL_TEXTURE, { x: 500, y: 83 });
    app.stage.addChild(barrel);

    const barrelGUI = GUI.addFolder('barrel');
    barrelGUI.add(barrel, 'x').min(0).max(800);
    barrelGUI.add(barrel, 'y').min(0).max(200);

    const ovenSheet = getSheet(OVEN_SHEET);
    const oven = AnimatedSprite(getAnim(ovenSheet, 'oven'), { x: 30, y: 41, speed: 0.15 });
    oven.play();
    app.stage.addChild(oven);
    const ovenGUI = GUI.addFolder('oven');
    ovenGUI.add(oven, 'x').min(0).max(800);
    ovenGUI.add(oven, 'y').min(0).max(200);

    const ground = Sprite(GROUND_TEXTURE, { x: 100, y: 128 });
    ground.width = 1000;
    ground.x = ground.width / 2;
    app.stage.addChild(ground);

    const groundBBs = [getBB(ground), getBB(barrel), getBB(oven)];

    const candleLightConfig = {
      xOffset: 0,
      yOffset: 10,
      alpha: 0.3,
    }

    const candleLight = Sprite(CANDLE_LIGHT_TEXTURE);
    candleLight.anchor.y = 0.5;
    candleLight.blendMode = PIXI.BLEND_MODES.LIGHTEN;
    app.stage.addChild(candleLight);

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

    const chargerSheet = getSheet(CHARGER_SHEET);
    const charger = new PIXI.Container();
    const chargerAnim = new PIXI.AnimatedSprite(getAnim(chargerSheet, 'charger'));
    chargerAnim.anchor.y = 0.5;
    chargerAnim.animationSpeed = 0.1;
    chargerAnim.scale.set(2);
    chargerAnim.x = 10;
    chargerAnim.visible = false;
    charger.addChild(chargerAnim);
    app.stage.addChild(charger);

    const pKnifeSprites = [];
    for(let i = 0; i < pKnives; i++) {
      const knifeTally = Sprite(KNIFE_TEXTURE);
      knifeTally.scale.set(4);
      app.stage.addChild(knifeTally);
      knifeTally.angle = 45;
      knifeTally.x = app.view.width - 100 + (i * (knifeTally.width + 20));
      knifeTally.y = app.view.height - 50;
      pKnifeSprites.push(knifeTally);
    }

    const traceGUI = GUI.addFolder('trace');
    traceGUI.add(traceConfig, 'aim');
    traceGUI.add(traceConfig, 'collision');

    const draw = new PIXI.Graphics();
    app.stage.addChild(draw);

    let aiming = false;

    const knives = new Set();

    app.ticker.add(delta => {

      dragText.visible = !!draggableCorpse && !dragMode;
      dragText.x = draggableCorpse ? draggableCorpse.state.x : 0;
      dragText.y = 20;

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
      if(traceConfig.aim) {
        draw.lineStyle(1, 0).moveTo(charger.x, charger.y).lineTo(controls.mouse.x, controls.mouse.y);
      }
      const v = { x: controls.mouse.x - charger.x, y: controls.mouse.y - charger.y };
      const mag = Math.sqrt(v.x * v.x + v.y * v.y);
      const theta = Math.atan2(v.y, v.x);
      charger.angle = theta * 180 / Math.PI;

      if(controls.aiming && !aiming && pKnives > 0) {
        chargerAnim.gotoAndPlay(0);
        chargerAnim.loop = false;
        chargerAnim.visible = true;
        aiming = true;
      }

      if(aiming && !controls.aiming) {
        aiming = false;
        pKnives--;
        pKnifeSprites[pKnives].alpha = 0.25;
        const knife = new Entity({ knife: Sprite(KNIFE_TEXTURE) }, 'knife', { x: charger.x, y: charger.y, index: knifeIndex });
        knife.frozen = false;
        knife.state.anchor.y = 0.5;
        knife.state.anchor.x = 0.5;
        knife.velocity.x = v.x / mag * (chargerAnim.currentFrame + 1) * 3;
        knife.velocity.y = v.y / mag * (chargerAnim.currentFrame + 1) * 3;
        knives.add(knife);
        chargerAnim.gotoAndStop(0);
        chargerAnim.visible = false;
      }
    }

      candleLight.x = candle.x + candleLightConfig.xOffset;
      candleLight.y = candle.y + candleLightConfig.yOffset;
      candleLight.alpha = candleLightConfig.alpha;

      for(const knife of knives) {
        if(knife.frozen) {
          const pickupBB = fakeBB(knife.state, 30, 30);
          traceBB(pickupBB, 0xffff00);

          if(anyCollide(pickupBB, [getBB(player.state)])) {
            pKnifeSprites[pKnives].alpha = 1;
            pKnives++;
            knife.destroy();
            knives.delete(knife);
          }
          continue;
        };

        knife.velocity.y += GRAVITY * delta;
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
          .filter(entity => EN_DEATH in entity.states)
          .map(entity => ({ entity, ...getBB(entity.state) }));

        const hits = entityCollides(nextBB, enemyBBs);
        if(hits.length) {
          const deadFella = hits[0].entity;
          deadFella.setState(EN_DEATH);
          deadFella.velocity.x = -5;
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
        const prevBB = getBB(entity.state);
        entity.state.x += entity.velocity.x * delta;
        entity.state.y += entity.velocity.y * delta;
        let nextBB = getBB(entity.state);
        traceBB(nextBB, 0x00ff00);
        entity.isGrounded = false;
        const collisions = entityCollides(nextBB, groundBBs);
        for(const collided of collisions) {
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
          nextBB = getBB(entity.state);
        }
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

      player.setFacing(pFacing);
      charger.x = player.state.x;
      charger.y = player.state.y + 20;
    });
}
