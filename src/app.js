import GUI from './gui.js';
import { loadAssets, getTexture, getSheet, getAnim } from './lib.js';
import { getBB, entityCollides } from './collision.js';
import Controls from './controls.js';
import assetList, {
  PLAYER_IDLE_TEXTURE,
  PLAYER_JUMP_TEXTURE,
  PLAYER_RUN_SHEET,
  GROUND_TEXTURE,
  CABIN_TEXTURE,
  CANDLE_TEXTURE,
  CANDLE_SHEET,
  CANDLE_LIGHT_TEXTURE,
  BARREL_TEXTURE,
  ENEMY_IDLE_TEXTURE,
  CHARGER_SHEET,
  OVEN_TEXTURE,
  KNIFE_TEXTURE,
  OVEN_SHEET,
} from './assets.js';
import { Sprite, AnimatedSprite } from './lib.js';
import Entity from './Entity.js';

const PLAYER_VELOCITY = 2;
const JUMP_VELOCITY = 10;
const GRAVITY = 1;

const PS_IDLE = 'IDLE';
const PS_WALKING = 'WALKING';
const PS_JUMPING = 'JUMPING';

const app = window.app = new PIXI.Application({
  backgroundColor: 0xf0e2e2,
  width: 800,
  height: 600,
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

    const controls = new Controls(app.view);

    const cabin = Sprite(CABIN_TEXTURE);
    cabin.x = cabin.width / 2;
    app.stage.addChild(cabin);


    const candleSheet = getSheet(CANDLE_SHEET);
    const candle = AnimatedSprite(getAnim(candleSheet, 'candle_animated'), { x: 120, y: 43 });
    candle.animationSpeed = 0.2;
    candle.play();
    candle.scale.set(2, 2);
    app.stage.addChild(candle);

    const barrel = Sprite(BARREL_TEXTURE, { x: 321, y: 83 });
    barrel.scale.set(2, 2);
    app.stage.addChild(barrel);

    const barrelGUI = GUI.addFolder('barrel');
    barrelGUI.add(barrel, 'x').min(0).max(800);
    barrelGUI.add(barrel, 'y').min(0).max(200);

    const ovenSheet = getSheet(OVEN_SHEET);
    const oven = AnimatedSprite(getAnim(ovenSheet, 'oven'), { x: 30, y: 41 });
    oven.scale.set(2,2);
    oven.animationSpeed = 0.15;
    oven.play();
    app.stage.addChild(oven);
    const ovenGUI = GUI.addFolder('oven');
    ovenGUI.add(oven, 'x').min(0).max(800);
    ovenGUI.add(oven, 'y').min(0).max(200);
    ovenGUI.add(oven, 'animationSpeed').min(0).max(1);
    const runSheet = getSheet(PLAYER_RUN_SHEET);

    const playerStates = {
      [PS_IDLE]: Sprite(PLAYER_IDLE_TEXTURE),
      [PS_JUMPING]: Sprite(PLAYER_JUMP_TEXTURE),
      [PS_WALKING]: AnimatedSprite(getAnim(runSheet, 'run'), { speed: 0.2 }),
    };

    const playerEntity = new Entity(playerStates, PS_IDLE, { x: 30, y: 25 });
    let pDir = 1;
    let pFacing = 1;

    const enemyStates = {
      idle: Sprite(ENEMY_IDLE_TEXTURE)
    };

    const enemyEntity = new Entity(enemyStates, 'idle', { x: 200, y: 25 });

    const entities = [playerEntity, enemyEntity];

    const ground = Sprite(GROUND_TEXTURE, { x: 100, y: 128 });
    ground.width = 1000;
    app.stage.addChild(ground);

    const groundBBs = [getBB(ground), getBB(barrel)];

    const candleLightConfig = {
      xOffset: 0,
      yOffset: 10,
      alpha: 0.3,
    }

    const candleLight = Sprite(CANDLE_LIGHT_TEXTURE);
    candleLight.anchor.y = 0.5;
    candleLight.blendMode = PIXI.BLEND_MODES.LIGHTEN;
    candleLight.scale.set(2, 2);
    app.stage.addChild(candleLight);

    const candleGUI = GUI.addFolder('candle');
    candleGUI.add(candle, 'x').min(0).max(200);
    candleGUI.add(candle, 'y').min(0).max(200);
    candleGUI.add(candle, 'animationSpeed').min(0).max(1);
    candleGUI.add(candleLightConfig, 'xOffset').min(-64).max(64);
    candleGUI.add(candleLightConfig, 'yOffset').min(-64).max(64);
    candleGUI.add(candleLightConfig, 'alpha').min(0.01).max(1.0);

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

    const chargerConfig = {
      trace: false,
    }

    const throwGUI = GUI.addFolder('throw');
    throwGUI.add(chargerConfig, 'trace');

    const draw = new PIXI.Graphics();
    app.stage.addChild(draw);

    let aiming = false;

    const knives = [];

    app.ticker.add(delta => {
      const player = playerEntity.state;
      const enemy = enemyEntity.state;

      const prevState = player.stateName;
      const prevDir = pDir;

      pDir = controls.getDirection();
      if(pDir) {
        pFacing = pDir;
      }

      playerEntity.velocity.x = pDir * 5;

      if(playerEntity.isGrounded && controls.jump) {
        playerEntity.velocity.y = -JUMP_VELOCITY;
        playerEntity.setState(PS_JUMPING);

      } else {
        playerEntity.velocity.y += GRAVITY;
      }

      enemyEntity.velocity.y += GRAVITY;

    if(controls.mouse) {
      draw.clear();
      if(chargerConfig.trace) {
        draw.lineStyle(1, 0).moveTo(charger.x, charger.y).lineTo(controls.mouse.x, controls.mouse.y);
      }
      const v = { x: controls.mouse.x - charger.x, y: controls.mouse.y - charger.y };
      const mag = Math.sqrt(v.x * v.x + v.y * v.y);
      const theta = Math.atan2(v.y, v.x);
      charger.angle = theta * 180 / Math.PI;

      if(controls.aiming && !aiming) {
        chargerAnim.gotoAndPlay(0);
        chargerAnim.loop = false;
        chargerAnim.visible = true;
        aiming = true;
      }

      if(aiming && !controls.aiming) {
        aiming = false;
        const knife = new Entity({ knife: Sprite(KNIFE_TEXTURE) }, 'knife', charger);
        knife.frozen = false;
        knife.velocity.x = v.x / mag * (chargerAnim.currentFrame + 1) * 5;
        knife.velocity.y = v.y / mag * (chargerAnim.currentFrame + 1) * 5;
        knives.push(knife);
        chargerAnim.gotoAndStop(0);
        chargerAnim.visible = false;
      }
    }

      candleLight.x = candle.x + candleLightConfig.xOffset;
      candleLight.y = candle.y + candleLightConfig.yOffset;
      candleLight.alpha = candleLightConfig.alpha;

      for(const knife of knives) {
        if(!knife.frozen) {
          const knifeBB = getBB(knife.state);
          const collisions = entityCollides(knifeBB, groundBBs);
          if(collisions.length) {
            knife.frozen = true;
            continue;
          }

          knife.velocity.y += GRAVITY;
          knife.state.x += knife.velocity.x;
          knife.state.y += knife.velocity.y;
          knife.state.angle = 90 + (Math.atan2(knife.velocity.y, knife.velocity.x) * 180 / Math.PI);
        }
      }

      for(const entity of entities) {
        const prevBB = getBB(entity.state);
        entity.state.x += entity.velocity.x;
        entity.state.y += entity.velocity.y;
        let nextBB = getBB(entity.state);
        entity.isGrounded = false;
        const collisions = entityCollides(nextBB, groundBBs);
        for(const collided of collisions) {
          if(nextBB.bottom > collided.top && prevBB.bottom <= collided.top) {
            entity.state.y = collided.top - entity.state.height;
            entity.velocity.y = 0;
            entity.isGrounded = true;

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

      if(!playerEntity.isGrounded && playerEntity.stateName !== PS_JUMPING) {
        playerEntity.setState(PS_JUMPING);

      } else if(playerEntity.isGrounded && playerEntity.stateName === PS_JUMPING) {
        if(pDir === 0) {
          playerEntity.setState(PS_IDLE);

        } else {
          playerEntity.setState(PS_WALKING);
        }
      } else if(pDir !== prevDir) {
        if(pDir === 0) {
          playerEntity.setState(PS_IDLE);

        } else {
          playerEntity.setState(PS_WALKING);
        }
      }

      playerEntity.setFacing(pFacing);
      charger.x = playerEntity.state.x;
      charger.y = playerEntity.state.y + 20;
    });
}
