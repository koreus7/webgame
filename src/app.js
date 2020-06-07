import GUI from './gui.js';
import { getBB, playerCollides, loadAssets, getTexture, getSheet, getAnim } from './lib.js';
import assetList, { PLAYER_IDLE_TEXTURE, PLAYER_JUMP_TEXTURE, GROUND_TEXTURE, WALL_TEXTURE, CABIN_TEXTURE, PLAYER_RUN_SHEET } from './assets.js';

const MOVE_LEFT = 37;
const MOVE_RIGHT = 39;
const JUMP = 32;
const PLAYER_VELOCITY = 2;
const JUMP_VELOCITY = 10;

const PS_IDLE = 'IDLE';
const PS_WALKING = 'WALKING';
const PS_JUMPING = 'JUMPING';

const app = new PIXI.Application({
  backgroundColor: 0xf0e2e2,
  width: 800,
  height: 600,
});

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

document.body.appendChild(app.view);

loadAssets(
  app,
  assetList,
  setup
);

function setup() {
  console.log('setup');
    const dat = window.dat || null;
    GUI.init(dat);

    let moveLeft = 0;
    let moveRight = 0;
    let pressingJump = 0;
    let isGrounded = false;

    window.addEventListener('keydown', (event) => {
      switch(event.keyCode) {
        case MOVE_LEFT:
          moveLeft = 1;
          break;
        case MOVE_RIGHT:
          moveRight = 1;
          break;
        case JUMP:
          pressingJump = 1;
          break;
      }
    });

    window.addEventListener('keyup', (event) => {
      switch(event.keyCode) {
        case MOVE_LEFT:
          moveLeft = 0;
          break;
        case MOVE_RIGHT:
          moveRight = 0;
          break;
          case JUMP:
            pressingJump = 0;
            break;
      }
    });

    const wall = new PIXI.Sprite(getTexture(app, WALL_TEXTURE));
    app.stage.addChild(wall);
    wall.x = 325;
    wall.width = 36;
    wall.height = 36
    wall.y = 100 - 12;

    const cabin = new PIXI.Sprite(getTexture(app, CABIN_TEXTURE));
    cabin.scale.set(2, 2);
    app.stage.addChild(cabin);

    const runSheet = getSheet(app, PLAYER_RUN_SHEET);

    let player = new PIXI.AnimatedSprite([getTexture(app, PLAYER_IDLE_TEXTURE)]);
    app.stage.addChild(player);
    let pState = PS_IDLE;
    let pDir = 1;
    player.x = 10;
    player.y = 25;
    let pA = { x: 0, y: 1 };
    let pV = { x: 0, y: 0 };

    const swapPlayerSprite = (newSprite) => {
      newSprite.x = player.x;
      newSprite.y = player.y;
      app.stage.removeChild(player);
      player = newSprite;
      app.stage.addChild(player);
    }

    const ground = new PIXI.Sprite(getTexture(app, GROUND_TEXTURE));
    app.stage.addChild(ground);
    ground.x = 0;
    ground.y = 128;
    ground.width = 1000;

    const groundBBs = [getBB(ground), getBB(wall)];

    app.ticker.add(delta => {
      const prevState = pState;
      const prevDir = pDir;
      const prevGrounded = isGrounded;

      pDir = moveRight - moveLeft;
      pV.x = (moveRight - moveLeft) * 5;
      
      if(isGrounded && pressingJump) {
        pV.y = -JUMP_VELOCITY;
        pState = PS_JUMPING;
      } else {
        pV.y += pA.y;
      }

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

      if(!isGrounded && pState !== PS_JUMPING) {
        pState = PS_JUMPING;
        swapPlayerSprite(new PIXI.Sprite(getTexture(app, PLAYER_JUMP_TEXTURE)));
        
      } else if(isGrounded && pState === PS_JUMPING) {
        if(pDir === 0) {
          pState = PS_IDLE;
          swapPlayerSprite(new PIXI.Sprite(getTexture(app, PLAYER_IDLE_TEXTURE)));
        } else {
          pState = PS_WALKING;
          swapPlayerSprite(new PIXI.AnimatedSprite(getAnim(runSheet, 'run')));
        }
      } else if(pDir !== prevDir) {
        if(pDir === 0) {
          console.log('STOP WALKING');
          pState = PS_IDLE;
          swapPlayerSprite(new PIXI.Sprite(getTexture(app, PLAYER_IDLE_TEXTURE)));
        } else {
          console.log('NOW WALKING');
          pState = PS_WALKING;
          const sprite = new PIXI.AnimatedSprite(getAnim(runSheet, 'run'));
          sprite.animationSpeed = 0.2;
          sprite.play();
          swapPlayerSprite(sprite);
        }
      }
    });
}
