import GUI from './gui.js';
import { getBB, playerCollides, loadAssets, getTexture, getSheet, getAnim } from './lib.js';
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
  console.log('setup');
    const dat = window.dat || null;
    GUI.init(dat);

    const controls = new Controls();

    let isGrounded = false;

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

    const playerIdle = Sprite(PLAYER_IDLE_TEXTURE, { visible: false });
    app.stage.addChild(playerIdle);

    const playerJump = Sprite(PLAYER_JUMP_TEXTURE, { visible: false });
    app.stage.addChild(playerJump);

    const playerWalk = AnimatedSprite(getAnim(runSheet, 'run'), { visible: false, speed: 0.2 });
    app.stage.addChild(playerWalk);

    let player = playerIdle;
    player.visible = true;
    player.x = 30;
    player.y = 25;

    let pState = PS_IDLE;
    let pDir = 1;
    let pFacing = 1;
    let pA = { x: 0, y: 1 };
    let pV = { x: 0, y: 0 };

    const swapPlayerSprite = (newSprite) => {
      player.visible = false;
      newSprite.x = player.x;
      newSprite.y = player.y;
      newSprite.visible = true;
      player = newSprite;
      player.scale.x = pFacing;
    }

    const ground = Sprite(GROUND_TEXTURE, { x: 0, y: 128 });
    ground.width = 1000;
    app.stage.addChild(ground);

    const groundBBs = [getBB(ground), getBB(barrel)];

    const enemy = Sprite(ENEMY_IDLE_TEXTURE);
    app.stage.addChild(enemy);

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
      const prevState = pState;
      const prevDir = pDir;
      const prevGrounded = isGrounded;

      pDir = controls.getDirection();
      if(pDir) {
        pFacing = pDir;
      }

      pV.x = pDir * 5;
      
      if(isGrounded && controls.jump) {
        pV.y = -JUMP_VELOCITY;
        pState = PS_JUMPING;
      } else {
        pV.y += pA.y;
      }

      candleLight.x = candle.x + candleLightConfig.xOffset;
      candleLight.y = candle.y + candleLightConfig.yOffset;
      candleLight.alpha = candleLightConfig.alpha;

      const prevBB = getBB(player);

      player.x += pV.x;
      player.y += pV.y;
      let playerBB = getBB(player);
      isGrounded = false;
      const collisions = playerCollides(playerBB, groundBBs);
      for(const collided of collisions) {
        if(playerBB.bottom > collided.top && prevBB.bottom <= collided.top) {
          player.y = collided.top - player.height;
          pV.y = 0;
          isGrounded = true;
        } else if(playerBB.top < collided.bottom && prevBB.top >= collided.bottom) {
          player.y = collided.bottom;
          pV.y = 0;
          isGrounded = true;
        } else if(playerBB.right > collided.left && prevBB.right <= collided.left) {
          player.x = collided.left - player.width;
          pV.x = 0;
        } else if(playerBB.left < collided.right && prevBB.left >= collided.right) {
          player.x = collided.right;
          pV.x = 0;
        }
        playerBB = getBB(player);
      }

      if(!isGrounded && prevState !== PS_JUMPING) {
        pState = PS_JUMPING;
        swapPlayerSprite(playerJump);
        
      } else if(isGrounded && pState === PS_JUMPING) {
        if(pDir === 0) {
          pState = PS_IDLE;
          swapPlayerSprite(playerIdle);
        } else {
          pState = PS_WALKING;
          playerWalk.gotoAndPlay(0);
          swapPlayerSprite(playerWalk);
        }
      } else if(pDir !== prevDir) {
        if(pDir === 0) {
          pState = PS_IDLE;
          swapPlayerSprite(playerIdle);

        } else {
          pState = PS_WALKING;
          playerWalk.gotoAndPlay(0);
          swapPlayerSprite(playerWalk);
        }
      }

      player.scale.x = pFacing;
    });
}
