import GUI from './gui.js';

const PLAYER_TEXTURE = './assets/images/player.png';
const GROUND_TEXTURE = './assets/images/ground.png';
const MOVE_LEFT = 37;
const MOVE_RIGHT = 39;
const PLAYER_VELOCITY = 2;

const app = new PIXI.Application({
  backgroundColor: 0xf0e2e2,
  width: 800,
  height: 600,
});

const getBB = (obj) => {
  return { left: obj.x, top: obj.y, right: obj.x + obj.width, bottom: obj.y + obj.height };
}

const isBetween = (v, start, end) => {
  return v >= start || v < end;
}

const playerCollides = (player, walls) => {
  for(let i = 0; i < walls.length; i++) {
    const wall = walls[i];
    if(
      player.left < wall.right &&
      player.right > wall.left &&
      player.top < wall.bottom &&
      player.bottom > wall.top) {
        return wall;
      }
  }

  return null;
};

document.body.appendChild(app.view);

app.loader
    .add(PLAYER_TEXTURE)
    .add(GROUND_TEXTURE)  
    .load(setup);

function setup() {
    const dat = window.dat || null;
    GUI.init(dat);

    let moveLeft = 0;
    let moveRight = 0;

    window.addEventListener('keydown', (event) => {
      switch(event.keyCode) {
        case MOVE_LEFT:
          moveLeft = 1;
          break;
        case MOVE_RIGHT:
          moveRight = 1;
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
      }
    });

    const player = new PIXI.Sprite(app.loader.resources[PLAYER_TEXTURE].texture);
    app.stage.addChild(player);
    player.x = 100;
    player.y = 25;
    let pA = { x: 0, y: 1 };
    let pV = { x: 0, y: 0 };

    const ground = new PIXI.Sprite(app.loader.resources[GROUND_TEXTURE].texture);
    app.stage.addChild(ground);
    ground.x = 0;
    ground.y = 100;

    const groundBBs = [getBB(ground)];
    console.log('BB', groundBBs);

    app.ticker.add(delta => {
      pV.x = (moveRight - moveLeft) * 5;
      pV.y += pA.y;
      player.x += pV.x;
      player.y += pV.y;

      const playerBB = getBB(player);
      const collided = playerCollides(playerBB, groundBBs);
      if(collided) {
        if(playerBB.bottom > collided.top) {
          player.y = collided.top - player.height;
          pV.y = 0;
        } else if(playerBB.top < collided.bottom) {
          player.y = collided.bottom;
          pV.y = 0;
        } else if(playerBB.right > collided.left) {
          player.x = collided.left - player.width;
          pV.x = 0;
        } else if(playerBB.left < collided.right) {
          player.x = collided.right;
          pV.x = 0;
        }
      }
    });
}
