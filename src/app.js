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
  CANDLE_LIGHT_TEXTURE,
  BARREL_TEXTURE,
  ENEMY_IDLE_TEXTURE
} from './assets.js';
import { Sprite, AnimatedSprite } from './lib.js';
import StateSprite from './Entity.js';

const PLAYER_VELOCITY = 2;
const JUMP_VELOCITY = 10;

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

    const controls = new Controls();

    const cabin = Sprite(CABIN_TEXTURE);
    cabin.x = cabin.width;
    cabin.scale.set(2, 2);
    app.stage.addChild(cabin);

    const candle = Sprite(CANDLE_TEXTURE, { x: 120, y: 43 });
    candle.scale.set(2, 2);
    app.stage.addChild(candle);

    const barrel = Sprite(BARREL_TEXTURE, { x: 321, y: 83 });
    barrel.scale.set(2, 2);
    app.stage.addChild(barrel);

    const barrelGUI = GUI.addFolder('barrel');
    barrelGUI.add(barrel, 'x').min(0).max(800);
    barrelGUI.add(barrel, 'y').min(0).max(200);

    const runSheet = getSheet(PLAYER_RUN_SHEET);

    const playerStates = {
      [PS_IDLE]: Sprite(PLAYER_IDLE_TEXTURE),
      [PS_JUMPING]: Sprite(PLAYER_JUMP_TEXTURE),
      [PS_WALKING]: AnimatedSprite(getAnim(runSheet, 'run'), { speed: 0.2 }),
    };

    const playerEntity = new StateSprite(playerStates, PS_IDLE, { x: 30, y: 25 });
    let pState = PS_IDLE;
    let pDir = 1;
    let pFacing = 1;
    let pA = { x: 0, y: 1 };

    const enemyStates = {
      idle: Sprite(ENEMY_IDLE_TEXTURE)
    };

    const enemyEntity = new StateSprite(enemyStates, 'idle', { x: 200, y: 25 });

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
    candleGUI.add(candleLightConfig, 'xOffset').min(-64).max(64);
    candleGUI.add(candleLightConfig, 'yOffset').min(-64).max(64);
    candleGUI.add(candleLightConfig, 'alpha').min(0.01).max(1.0);


    app.ticker.add(delta => {
      const player = playerEntity.state;
      const enemy = enemyEntity.state;

      const prevState = pState;
      const prevDir = pDir;

      pDir = controls.getDirection();
      if(pDir) {
        pFacing = pDir;
      }

      playerEntity.velocity.x = pDir * 5;
      
      if(playerEntity.isGrounded && controls.jump) {
        playerEntity.velocity.y = -JUMP_VELOCITY;
        pState = PS_JUMPING;
      } else {
        playerEntity.velocity.y += pA.y;
      }

      enemyEntity.velocity.y += 1;

      candleLight.x = candle.x + candleLightConfig.xOffset;
      candleLight.y = candle.y + candleLightConfig.yOffset;
      candleLight.alpha = candleLightConfig.alpha;

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
    });
}
