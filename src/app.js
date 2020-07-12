import { loadAssets } from './lib.js';
import * as assets from './assets.js';
import startGame from './play.js';

const app = window.app = new PIXI.Application({
  backgroundColor: 0xffcccc,
  width: document.body.clientWidth - 40,
  height: document.body.clientHeight - 40,
});

window.addEventListener('resize', () => {
  const width = document.body.clientWidth - 40;
  const height = document.body.clientHeight - 40;
  app.view.style.width = width + 'px';
  app.view.style.height = height + 'px';
  app.resize(width, height);
});

let devMode = true;

app.view.style.margin = '20px';

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
PIXI.settings.TARGET_FPMS = 0.06;

app.ticker.autoStart = false;
app.ticker.stop();

var stats = new Stats();
stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.domElement );
stats.domElement.classList.add('fps-monitor');

function animate(time) {
  stats.begin();
  app.ticker.update(time);
  app.renderer.render(app.stage);
	stats.end();
  requestAnimationFrame(animate);
}
animate(performance.now());

document.body.appendChild(app.view);
Promise.all([
  Promise.resolve([{
    "name": "theatre 1",
    "contents": [
      {
        "type": "node",
        "id": "asdf",
        "x": 288,
        "y": 437
      },
      {
        "type": "node",
        "id": "fxloygmti",
        "x": 220,
        "y": 340
      },
      {
        "type": "node",
        "id": "t9p8uyudw",
        "x": 394,
        "y": 855
      },
      {
        "type": "node",
        "id": "ucv9ghh6y",
        "x": 769,
        "y": 832
      },
      {
        "type": "agent",
        "x": 173,
        "y": 241
      },
      {
        "type": "agent",
        "x": 147,
        "y": 270
      },
      {
        "type": "node",
        "id": "i64iiqimd",
        "x": 358,
        "y": 340
      },
      {
        "type": "node",
        "id": "qb1msqu40",
        "x": 852,
        "y": 546
      },
      {
        "type": "node",
        "id": "1mmvf0oig",
        "x": 1396,
        "y": 539
      },
      {
        "type": "node",
        "id": "bn4o13jpv",
        "x": 1408,
        "y": 232
      },
      {
        "type": "node",
        "id": "bsku353s2",
        "x": 290,
        "y": 575
      },
      {
        "type": "node",
        "id": "35iy48mk3",
        "x": 383,
        "y": 722
      },
      {
        "type": "node",
        "id": "7skdsui37",
        "x": 497,
        "y": 514
      },
      {
        "type": "node",
        "id": "5p23x24en",
        "x": 609,
        "y": 598
      },
      {
        "type": "node",
        "id": "nu7s3txra",
        "x": 723,
        "y": 577
      },
      {
        "type": "agent",
        "x": 209,
        "y": 269
      },
      {
        "type": "agent",
        "x": 177,
        "y": 268
      },
      {
        "type": "agent",
        "x": 143,
        "y": 242
      },
      {
        "type": "agent",
        "x": 209,
        "y": 242
      },
      {
        "type": "agent",
        "x": 144,
        "y": 333
      },
      {
        "type": "agent",
        "x": 175,
        "y": 334
      },
      {
        "type": "agent",
        "x": 207,
        "y": 335
      },
      {
        "type": "agent",
        "x": 146,
        "y": 303
      },
      {
        "type": "agent",
        "x": 175,
        "y": 304
      },
      {
        "type": "agent",
        "x": 209,
        "y": 303
      },
      {
        "type": "agent",
        "x": 368,
        "y": 240
      },
      {
        "type": "agent",
        "x": 403,
        "y": 238
      },
      {
        "type": "agent",
        "x": 432,
        "y": 238
      },
      {
        "type": "agent",
        "x": 370,
        "y": 271
      },
      {
        "type": "agent",
        "x": 400,
        "y": 270
      },
      {
        "type": "agent",
        "x": 433,
        "y": 269
      },
      {
        "type": "agent",
        "x": 369,
        "y": 304
      },
      {
        "type": "agent",
        "x": 402,
        "y": 303
      },
      {
        "type": "agent",
        "x": 431,
        "y": 302
      },
      {
        "type": "agent",
        "x": 368,
        "y": 333
      },
      {
        "type": "agent",
        "x": 402,
        "y": 332
      },
      {
        "type": "agent",
        "x": 432,
        "y": 331
      },
      {
        "type": "node",
        "id": "8y1h50wdl",
        "x": 1408,
        "y": 125
      }
    ],
    "mapStuff": {
      "mapData": [
        [
          3,
          3,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          1,
          1,
          1,
          1,
          1,
          0,
          0,
          1,
          1,
          1,
          1,
          1,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          7,
          7,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          4,
          4,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          7,
          7,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          0,
          5,
          5,
          5,
          0,
          4,
          4,
          0,
          5,
          5,
          5,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          1,
          1,
          2,
          2,
          1,
          1,
          1,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          0,
          5,
          5,
          5,
          0,
          4,
          4,
          0,
          5,
          5,
          5,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          0,
          5,
          5,
          5,
          0,
          4,
          4,
          0,
          5,
          5,
          5,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          0,
          5,
          5,
          5,
          0,
          4,
          4,
          0,
          5,
          5,
          5,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          4,
          4,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          4,
          4,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          1,
          1,
          1,
          1,
          1,
          2,
          2,
          1,
          1,
          1,
          1,
          1,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          2,
          4,
          4,
          4,
          4,
          4,
          4,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          2,
          4,
          4,
          4,
          4,
          4,
          4,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          1,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          1,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          1,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          2,
          2,
          1,
          1,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          1,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          1,
          0,
          0,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ]
      ],
      "mapMetaData": [
        [
          {},
          {},
          {},
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {},
          {},
          {},
          {
            "onFire": true
          },
          {
            "onFire": true
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": true
          },
          {
            "onFire": true
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {},
          {},
          {},
          {
            "onFire": true
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": true
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {},
          {},
          {},
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {},
          {},
          {},
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {},
          {},
          {},
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "underTile": 4
          },
          {
            "onFire": false,
            "underTile": 4
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "rotation": 90,
            "underTile": 4
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "rotation": 450,
            "underTile": 4
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "rotation": 450
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "rotation": 450
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "underTile": 0
          },
          {
            "onFire": false,
            "rotation": null,
            "underTile": 0
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ]
      ]
    },
    "edges": [
      {
        "from": "fxloygmti",
        "to": "asdf"
      },
      {
        "from": "t9p8uyudw",
        "to": "ucv9ghh6y"
      },
      {
        "from": "i64iiqimd",
        "to": "asdf"
      },
      {
        "from": "ucv9ghh6y",
        "to": "qb1msqu40"
      },
      {
        "from": "qb1msqu40",
        "to": "1mmvf0oig"
      },
      {
        "from": "1mmvf0oig",
        "to": "bn4o13jpv"
      },
      {
        "from": "asdf",
        "to": "bsku353s2"
      },
      {
        "from": "bsku353s2",
        "to": "35iy48mk3"
      },
      {
        "from": "35iy48mk3",
        "to": "t9p8uyudw"
      },
      {
        "from": "bsku353s2",
        "to": "7skdsui37"
      },
      {
        "from": "7skdsui37",
        "to": "5p23x24en"
      },
      {
        "from": "5p23x24en",
        "to": "nu7s3txra"
      },
      {
        "from": "nu7s3txra",
        "to": "qb1msqu40"
      },
      {
        "from": "bn4o13jpv",
        "to": "8y1h50wdl"
      }
    ]
  },

  {
    "name": "theatre 2",
    "contents": [
      {
        "type": "node",
        "id": "asdf",
        "x": 291,
        "y": 437
      },
      {
        "type": "node",
        "id": "fxloygmti",
        "x": 221,
        "y": 344
      },
      {
        "type": "agent",
        "x": 173,
        "y": 241
      },
      {
        "type": "agent",
        "x": 147,
        "y": 270
      },
      {
        "type": "node",
        "id": "i64iiqimd",
        "x": 355,
        "y": 346
      },
      {
        "type": "node",
        "id": "bsku353s2",
        "x": 292,
        "y": 522
      },
      {
        "type": "agent",
        "x": 209,
        "y": 269
      },
      {
        "type": "agent",
        "x": 177,
        "y": 268
      },
      {
        "type": "agent",
        "x": 143,
        "y": 242
      },
      {
        "type": "agent",
        "x": 209,
        "y": 242
      },
      {
        "type": "agent",
        "x": 144,
        "y": 333
      },
      {
        "type": "agent",
        "x": 175,
        "y": 334
      },
      {
        "type": "agent",
        "x": 207,
        "y": 335
      },
      {
        "type": "agent",
        "x": 146,
        "y": 303
      },
      {
        "type": "agent",
        "x": 175,
        "y": 304
      },
      {
        "type": "agent",
        "x": 209,
        "y": 303
      },
      {
        "type": "agent",
        "x": 368,
        "y": 240
      },
      {
        "type": "agent",
        "x": 403,
        "y": 238
      },
      {
        "type": "agent",
        "x": 432,
        "y": 238
      },
      {
        "type": "agent",
        "x": 370,
        "y": 271
      },
      {
        "type": "agent",
        "x": 400,
        "y": 270
      },
      {
        "type": "agent",
        "x": 433,
        "y": 269
      },
      {
        "type": "agent",
        "x": 369,
        "y": 304
      },
      {
        "type": "agent",
        "x": 402,
        "y": 303
      },
      {
        "type": "agent",
        "x": 431,
        "y": 302
      },
      {
        "type": "agent",
        "x": 368,
        "y": 333
      },
      {
        "type": "agent",
        "x": 402,
        "y": 332
      },
      {
        "type": "agent",
        "x": 432,
        "y": 331
      },
      {
        "type": "node",
        "id": "000syl947",
        "x": 827,
        "y": 349
      },
      {
        "type": "node",
        "id": "6plbar462",
        "x": 967,
        "y": 343
      },
      {
        "type": "node",
        "id": "2iu6tvpmt",
        "x": 902,
        "y": 429
      },
      {
        "type": "agent",
        "x": 753,
        "y": 337
      },
      {
        "type": "agent",
        "x": 786,
        "y": 334
      },
      {
        "type": "agent",
        "x": 820,
        "y": 336
      },
      {
        "type": "agent",
        "x": 818,
        "y": 304
      },
      {
        "type": "agent",
        "x": 785,
        "y": 302
      },
      {
        "type": "agent",
        "x": 755,
        "y": 299
      },
      {
        "type": "agent",
        "x": 752,
        "y": 272
      },
      {
        "type": "agent",
        "x": 786,
        "y": 271
      },
      {
        "type": "agent",
        "x": 817,
        "y": 272
      },
      {
        "type": "agent",
        "x": 750,
        "y": 241
      },
      {
        "type": "agent",
        "x": 785,
        "y": 236
      },
      {
        "type": "agent",
        "x": 816,
        "y": 241
      },
      {
        "type": "agent",
        "x": 1040,
        "y": 335
      },
      {
        "type": "agent",
        "x": 1012,
        "y": 335
      },
      {
        "type": "agent",
        "x": 976,
        "y": 335
      },
      {
        "type": "agent",
        "x": 1040,
        "y": 300
      },
      {
        "type": "agent",
        "x": 1009,
        "y": 301
      },
      {
        "type": "agent",
        "x": 975,
        "y": 300
      },
      {
        "type": "agent",
        "x": 1038,
        "y": 270
      },
      {
        "type": "agent",
        "x": 1009,
        "y": 269
      },
      {
        "type": "agent",
        "x": 977,
        "y": 271
      },
      {
        "type": "agent",
        "x": 1040,
        "y": 240
      },
      {
        "type": "agent",
        "x": 1011,
        "y": 241
      },
      {
        "type": "agent",
        "x": 974,
        "y": 241
      },
      {
        "type": "node",
        "id": "2syb4rx6y",
        "x": 894,
        "y": 613
      },
      {
        "type": "node",
        "id": "wqtv2vkbn",
        "x": 936,
        "y": 656
      },
      {
        "type": "node",
        "id": "stp0do7ln",
        "x": 1104,
        "y": 660
      },
      {
        "type": "node",
        "id": "ktto63p5m",
        "x": 1101,
        "y": 977
      },
      {
        "type": "node",
        "id": "id650t3ez",
        "x": 947,
        "y": 979
      },
      {
        "type": "node",
        "id": "b9fct20w7",
        "x": 907,
        "y": 723
      },
      {
        "type": "node",
        "id": "es28w30j7",
        "x": 892,
        "y": 980
      },
      {
        "type": "node",
        "id": "8cp1240t4",
        "x": 848,
        "y": 657
      },
      {
        "type": "node",
        "id": "rhhoq1ihr",
        "x": 694,
        "y": 657
      },
      {
        "type": "node",
        "id": "8yfn9n2iu",
        "x": 690,
        "y": 976
      },
      {
        "type": "node",
        "id": "k0ng33gxs",
        "x": 847,
        "y": 976
      },
      {
        "type": "node",
        "id": "wzzxhtxw3",
        "x": 336,
        "y": 577
      },
      {
        "type": "node",
        "id": "wyw4637u7",
        "x": 471,
        "y": 580
      },
      {
        "type": "node",
        "id": "6o2v85od0",
        "x": 475,
        "y": 799
      },
      {
        "type": "node",
        "id": "wdvif56tw",
        "x": 336,
        "y": 796
      },
      {
        "type": "node",
        "id": "qfwxqdgxl",
        "x": 289,
        "y": 826
      },
      {
        "type": "node",
        "id": "gdln59r4i",
        "x": 286,
        "y": 686
      },
      {
        "type": "node",
        "id": "b1ltf1wmt",
        "x": 238,
        "y": 842
      },
      {
        "type": "node",
        "id": "sl71zrzbj",
        "x": 102,
        "y": 837
      },
      {
        "type": "node",
        "id": "dmmucq3f4",
        "x": 100,
        "y": 1023
      },
      {
        "type": "node",
        "id": "30x4cymoo",
        "x": 243,
        "y": 1031
      },
      {
        "type": "node",
        "id": "5fi81j69n",
        "x": 288,
        "y": 1043
      },
      {
        "type": "node",
        "id": "xx7c7x6ow",
        "x": 597,
        "y": 1141
      },
      {
        "type": "node",
        "id": "xr5c8x4uc",
        "x": 893,
        "y": 1136
      },
      {
        "type": "node",
        "id": "4a6xt8ub9",
        "x": 297,
        "y": 1132
      },
      {
        "type": "node",
        "id": "0sl8z46c7",
        "x": 605,
        "y": 1233
      },
      {
        "type": "node",
        "id": "f7z1l969m",
        "x": 605,
        "y": 1357
      }
    ],
    "mapStuff": {
      "mapData": [
        [
          3,
          3,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          3,
          3,
          3,
          3,
          3,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          1,
          1,
          1,
          1,
          1,
          0,
          0,
          1,
          1,
          1,
          1,
          1,
          1,
          3,
          3,
          3,
          3,
          3,
          1,
          1,
          1,
          1,
          1,
          1,
          0,
          0,
          1,
          1,
          1,
          1,
          1,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          1,
          3,
          3,
          3,
          3,
          3,
          1,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          4,
          4,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          4,
          4,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          0,
          5,
          5,
          5,
          0,
          4,
          4,
          0,
          5,
          5,
          5,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          5,
          5,
          5,
          0,
          4,
          4,
          0,
          5,
          5,
          5,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          0,
          5,
          5,
          5,
          0,
          4,
          4,
          0,
          5,
          5,
          5,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          5,
          5,
          5,
          0,
          4,
          4,
          0,
          5,
          5,
          5,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          0,
          5,
          5,
          5,
          0,
          4,
          4,
          0,
          5,
          5,
          5,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          5,
          5,
          5,
          0,
          4,
          4,
          0,
          5,
          5,
          5,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          0,
          5,
          5,
          5,
          0,
          4,
          4,
          0,
          5,
          5,
          5,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          5,
          5,
          5,
          0,
          4,
          4,
          0,
          5,
          5,
          5,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          4,
          4,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          4,
          4,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          4,
          4,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          4,
          4,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          1,
          1,
          1,
          1,
          1,
          2,
          2,
          1,
          1,
          1,
          1,
          1,
          1,
          3,
          3,
          3,
          3,
          3,
          1,
          1,
          1,
          1,
          1,
          1,
          2,
          2,
          1,
          1,
          1,
          1,
          1,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          4,
          4,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          4,
          4,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          4,
          4,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          4,
          4,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          4,
          4,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          4,
          4,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          4,
          4,
          2,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          4,
          4,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          4,
          4,
          2,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          4,
          4,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          4,
          4,
          1,
          1,
          1,
          1,
          0,
          0,
          1,
          3,
          3,
          3,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          4,
          4,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          4,
          4,
          1,
          3,
          3,
          1,
          0,
          0,
          1,
          3,
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          2,
          4,
          4,
          2,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          2,
          2,
          1,
          3,
          3,
          1,
          0,
          0,
          1,
          3,
          3,
          3,
          1,
          0,
          1,
          1,
          1,
          1,
          1,
          4,
          4,
          1,
          1,
          1,
          1,
          1,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          4,
          4,
          1,
          3,
          3,
          1,
          0,
          0,
          1,
          3,
          3,
          3,
          1,
          0,
          1,
          3,
          3,
          3,
          1,
          2,
          2,
          1,
          3,
          3,
          3,
          1,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          4,
          4,
          1,
          1,
          1,
          1,
          0,
          0,
          1,
          3,
          3,
          3,
          1,
          0,
          1,
          3,
          3,
          3,
          1,
          4,
          4,
          1,
          3,
          3,
          3,
          1,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          4,
          4,
          2,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          1,
          0,
          1,
          3,
          3,
          3,
          1,
          4,
          4,
          1,
          3,
          3,
          3,
          1,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          2,
          4,
          4,
          2,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          1,
          0,
          1,
          3,
          3,
          3,
          1,
          4,
          4,
          1,
          3,
          3,
          3,
          1,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          2,
          4,
          4,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          3,
          3,
          3,
          1,
          0,
          1,
          3,
          3,
          3,
          1,
          4,
          4,
          1,
          3,
          3,
          3,
          1,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          1,
          0,
          0,
          1,
          1,
          1,
          1,
          4,
          4,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          1,
          3,
          3,
          3,
          1,
          4,
          4,
          1,
          3,
          3,
          3,
          1,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          1,
          0,
          0,
          1,
          3,
          3,
          1,
          4,
          4,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          1,
          3,
          3,
          3,
          1,
          4,
          4,
          1,
          3,
          3,
          3,
          1,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          1,
          0,
          0,
          1,
          3,
          3,
          1,
          2,
          2,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          1,
          1,
          1,
          1,
          1,
          4,
          4,
          1,
          1,
          1,
          1,
          1,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          1,
          0,
          0,
          1,
          1,
          1,
          1,
          4,
          4,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          2,
          4,
          4,
          2,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          2,
          4,
          4,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          4,
          4,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          2,
          4,
          4,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          4,
          4,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          4,
          4,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          4,
          4,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          0,
          0,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          7,
          7,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          7,
          7,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          7,
          7,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ]
      ],
      "mapMetaData": [
        [
          {},
          {},
          {},
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {},
          {},
          {},
          {
            "onFire": true
          },
          {
            "onFire": true
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": true
          },
          {
            "onFire": true
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": true
          },
          {
            "onFire": true
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": true
          },
          {
            "onFire": true
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {},
          {},
          {},
          {
            "onFire": true
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": true
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": true
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": true
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {},
          {},
          {},
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {},
          {},
          {},
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {},
          {},
          {},
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "underTile": 4
          },
          {
            "onFire": false,
            "underTile": 4
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "underTile": 4
          },
          {
            "onFire": false,
            "underTile": 4
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "rotation": 90,
            "underTile": 4
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "rotation": 450,
            "underTile": 4
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "rotation": 90
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "rotation": 450
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "rotation": 90
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "rotation": 450
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "rotation": 90
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "rotation": 90
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "underTile": 4
          },
          {
            "onFire": false,
            "underTile": 4
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "underTile": 4
          },
          {
            "onFire": false,
            "underTile": 4
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "underTile": 0
          },
          {
            "onFire": false,
            "rotation": null,
            "underTile": 0
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "underTile": 4
          },
          {
            "onFire": false,
            "underTile": 4
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "rotation": 90
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "rotation": 90
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "rotation": 270
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "rotation": 90
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "underTile": 4
          },
          {
            "onFire": false,
            "underTile": 4
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "rotation": 90
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "rotation": 90
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "rotation": 90
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "rotation": 90
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {

            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ]
      ]
    },
    "edges": [
      {
        "from": "fxloygmti",
        "to": "asdf"
      },
      {
        "from": "i64iiqimd",
        "to": "asdf"
      },
      {
        "from": "asdf",
        "to": "bsku353s2"
      },
      {
        "from": "6plbar462",
        "to": "2iu6tvpmt"
      },
      {
        "from": "000syl947",
        "to": "2iu6tvpmt"
      },
      {
        "from": "2iu6tvpmt",
        "to": "2syb4rx6y"
      },
      {
        "from": "2syb4rx6y",
        "to": "wqtv2vkbn"
      },
      {
        "from": "2syb4rx6y",
        "to": "b9fct20w7"
      },
      {
        "from": "b9fct20w7",
        "to": "es28w30j7"
      },
      {
        "from": "wqtv2vkbn",
        "to": "stp0do7ln"
      },
      {
        "from": "stp0do7ln",
        "to": "ktto63p5m"
      },
      {
        "from": "ktto63p5m",
        "to": "id650t3ez"
      },
      {
        "from": "id650t3ez",
        "to": "es28w30j7"
      },
      {
        "from": "2syb4rx6y",
        "to": "8cp1240t4"
      },
      {
        "from": "8cp1240t4",
        "to": "rhhoq1ihr"
      },
      {
        "from": "rhhoq1ihr",
        "to": "8yfn9n2iu"
      },
      {
        "from": "8yfn9n2iu",
        "to": "k0ng33gxs"
      },
      {
        "from": "k0ng33gxs",
        "to": "es28w30j7"
      },
      {
        "from": "bsku353s2",
        "to": "wzzxhtxw3"
      },
      {
        "from": "wzzxhtxw3",
        "to": "wyw4637u7"
      },
      {
        "from": "wyw4637u7",
        "to": "6o2v85od0"
      },
      {
        "from": "6o2v85od0",
        "to": "wdvif56tw"
      },
      {
        "from": "wdvif56tw",
        "to": "qfwxqdgxl"
      },
      {
        "from": "bsku353s2",
        "to": "gdln59r4i"
      },
      {
        "from": "gdln59r4i",
        "to": "qfwxqdgxl"
      },
      {
        "from": "qfwxqdgxl",
        "to": "b1ltf1wmt"
      },
      {
        "from": "b1ltf1wmt",
        "to": "sl71zrzbj"
      },
      {
        "from": "sl71zrzbj",
        "to": "dmmucq3f4"
      },
      {
        "from": "dmmucq3f4",
        "to": "30x4cymoo"
      },
      {
        "from": "30x4cymoo",
        "to": "5fi81j69n"
      },
      {
        "from": "5fi81j69n",
        "to": "4a6xt8ub9"
      },
      {
        "from": "4a6xt8ub9",
        "to": "xx7c7x6ow"
      },
      {
        "from": "xx7c7x6ow",
        "to": "0sl8z46c7"
      },
      {
        "from": "es28w30j7",
        "to": "xr5c8x4uc"
      },
      {
        "from": "xr5c8x4uc",
        "to": "xx7c7x6ow"
      },
      {
        "from": "0sl8z46c7",
        "to": "f7z1l969m"
      }
    ]
  },
  {
    "name": "theatre 3",
    "contents": [
      {
        "type": "node",
        "id": "fxloygmti",
        "x": 171,
        "y": 288
      },
      {
        "type": "agent",
        "x": 173,
        "y": 241
      },
      {
        "type": "agent",
        "x": 147,
        "y": 270
      },
      {
        "type": "node",
        "id": "i64iiqimd",
        "x": 400,
        "y": 283
      },
      {
        "type": "agent",
        "x": 209,
        "y": 269
      },
      {
        "type": "agent",
        "x": 177,
        "y": 268
      },
      {
        "type": "agent",
        "x": 143,
        "y": 242
      },
      {
        "type": "agent",
        "x": 209,
        "y": 242
      },
      {
        "type": "agent",
        "x": 144,
        "y": 333
      },
      {
        "type": "agent",
        "x": 175,
        "y": 334
      },
      {
        "type": "agent",
        "x": 207,
        "y": 335
      },
      {
        "type": "agent",
        "x": 146,
        "y": 303
      },
      {
        "type": "agent",
        "x": 175,
        "y": 304
      },
      {
        "type": "agent",
        "x": 209,
        "y": 303
      },
      {
        "type": "agent",
        "x": 368,
        "y": 240
      },
      {
        "type": "agent",
        "x": 403,
        "y": 238
      },
      {
        "type": "agent",
        "x": 432,
        "y": 238
      },
      {
        "type": "agent",
        "x": 370,
        "y": 271
      },
      {
        "type": "agent",
        "x": 400,
        "y": 270
      },
      {
        "type": "agent",
        "x": 433,
        "y": 269
      },
      {
        "type": "agent",
        "x": 369,
        "y": 304
      },
      {
        "type": "agent",
        "x": 402,
        "y": 303
      },
      {
        "type": "agent",
        "x": 431,
        "y": 302
      },
      {
        "type": "agent",
        "x": 368,
        "y": 333
      },
      {
        "type": "agent",
        "x": 402,
        "y": 332
      },
      {
        "type": "agent",
        "x": 432,
        "y": 331
      },
      {
        "type": "node",
        "id": "wkw4bsvlf",
        "x": 498,
        "y": 319
      },
      {
        "type": "node",
        "id": "kd6wn7pwt",
        "x": 610,
        "y": 328
      },
      {
        "type": "node",
        "id": "a49ri4jm9",
        "x": 610,
        "y": 461
      },
      {
        "type": "node",
        "id": "u24fxzf34",
        "x": 389,
        "y": 720
      },
      {
        "type": "node",
        "id": "zw0wgx5kf",
        "x": 501,
        "y": 518
      },
      {
        "type": "node",
        "id": "pw6spz6k1",
        "x": 611,
        "y": 592
      },
      {
        "type": "node",
        "id": "hckot05gq",
        "x": 723,
        "y": 573
      },
      {
        "type": "node",
        "id": "er4ihtnb7",
        "x": 723,
        "y": 320
      },
      {
        "type": "node",
        "id": "8gzorqyu4",
        "x": 857,
        "y": 317
      },
      {
        "type": "node",
        "id": "13e4sgwm2",
        "x": 858,
        "y": 575
      },
      {
        "type": "node",
        "id": "gk69peph3",
        "x": 1104,
        "y": 320
      },
      {
        "type": "node",
        "id": "y3ewmspiu",
        "x": 393,
        "y": 769
      },
      {
        "type": "node",
        "id": "voeylp4ri",
        "x": 613,
        "y": 767
      },
      {
        "type": "node",
        "id": "qog4wlpdr",
        "x": 609,
        "y": 715
      },
      {
        "type": "node",
        "id": "rgp6zzg2u",
        "x": 286,
        "y": 558
      },
      {
        "type": "node",
        "id": "njaru44px",
        "x": 289,
        "y": 433
      }
    ],
    "mapStuff": {
      "mapData": [
        [
          3,
          3,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          1,
          1,
          1,
          1,
          1,
          4,
          4,
          1,
          1,
          1,
          1,
          1,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          4,
          4,
          0,
          0,
          0,
          0,
          0,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          0,
          5,
          5,
          5,
          0,
          4,
          4,
          0,
          5,
          5,
          5,
          0,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          0,
          5,
          5,
          5,
          0,
          4,
          4,
          0,
          5,
          5,
          5,
          0,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          0,
          5,
          5,
          5,
          0,
          4,
          4,
          0,
          5,
          5,
          5,
          0,
          2,
          4,
          4,
          4,
          4,
          4,
          4,
          2,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          7,
          7,
          7,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          0,
          5,
          5,
          5,
          0,
          4,
          4,
          0,
          5,
          5,
          5,
          0,
          2,
          4,
          4,
          4,
          4,
          4,
          4,
          2,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          7,
          7,
          7,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          4,
          4,
          0,
          0,
          0,
          0,
          0,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          1,
          1,
          1,
          1,
          0,
          0,
          1,
          1,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          4,
          4,
          0,
          0,
          0,
          0,
          0,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          1,
          3,
          3,
          1,
          0,
          0,
          1,
          1,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          1,
          1,
          1,
          1,
          1,
          2,
          2,
          1,
          1,
          1,
          1,
          1,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          1,
          3,
          3,
          1,
          0,
          0,
          1,
          1,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          1,
          1,
          1,
          2,
          2,
          1,
          1,
          1,
          3,
          3,
          1,
          0,
          0,
          1,
          1,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          1,
          0,
          0,
          1,
          1,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1,
          0,
          0,
          1,
          1,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          2,
          2,
          1,
          1,
          1,
          1,
          1,
          2,
          2,
          1,
          1,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ],
        [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3
        ]
      ],
      "mapMetaData": [
        [
          {},
          {},
          {},
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {},
          {},
          {},
          {
            "onFire": true
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": true
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {},
          {},
          {},
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {},
          {},
          {},
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {},
          {},
          {},
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {},
          {},
          {},
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": true
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": true
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "rotation": 90
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "rotation": 90,
            "underTile": 4
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "rotation": 90
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "rotation": 90,
            "underTile": 4
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "rotation": 90,
            "underTile": 4
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "rotation": 450,
            "underTile": 4
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "rotation": 450
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "rotation": 90
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "rotation": 450
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "rotation": 90
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false,
            "underTile": 0
          },
          {
            "onFire": false,
            "rotation": null,
            "underTile": 0
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ],
        [
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          },
          {
            "onFire": false
          }
        ]
      ]
    },
    "edges": [
      {
        "from": "zw0wgx5kf",
        "to": "pw6spz6k1"
      },
      {
        "from": "pw6spz6k1",
        "to": "hckot05gq"
      },
      {
        "from": "pw6spz6k1",
        "to": "a49ri4jm9"
      },
      {
        "from": "i64iiqimd",
        "to": "wkw4bsvlf"
      },
      {
        "from": "fxloygmti",
        "to": "wkw4bsvlf"
      },
      {
        "from": "wkw4bsvlf",
        "to": "kd6wn7pwt"
      },
      {
        "from": "kd6wn7pwt",
        "to": "a49ri4jm9"
      },
      {
        "from": "a49ri4jm9",
        "to": "pw6spz6k1"
      },
      {
        "from": "pw6spz6k1",
        "to": "zw0wgx5kf"
      },
      {
        "from": "kd6wn7pwt",
        "to": "er4ihtnb7"
      },
      {
        "from": "er4ihtnb7",
        "to": "er4ihtnb7"
      },
      {
        "from": "er4ihtnb7",
        "to": "8gzorqyu4"
      },
      {
        "from": "8gzorqyu4",
        "to": "gk69peph3"
      },
      {
        "from": "hckot05gq",
        "to": "13e4sgwm2"
      },
      {
        "from": "13e4sgwm2",
        "to": "8gzorqyu4"
      },
      {
        "from": "u24fxzf34",
        "to": "y3ewmspiu"
      },
      {
        "from": "y3ewmspiu",
        "to": "voeylp4ri"
      },
      {
        "from": "voeylp4ri",
        "to": "qog4wlpdr"
      },
      {
        "from": "qog4wlpdr",
        "to": "pw6spz6k1"
      },
      {
        "from": "fxloygmti",
        "to": "njaru44px"
      },
      {
        "from": "i64iiqimd",
        "to": "njaru44px"
      },
      {
        "from": "njaru44px",
        "to": "rgp6zzg2u"
      },
      {
        "from": "rgp6zzg2u",
        "to": "zw0wgx5kf"
      },
      {
        "from": "rgp6zzg2u",
        "to": "u24fxzf34"
      }
    ]
  }
  ]),
  loadAssets(assets)
]).then(([levels]) => {
  const menu = new PIXI.Container();
  app.stage.addChild(menu);
  let y = 50;
  let started = false;

  const devModeButton = new PIXI.Text('EDIT');
  devModeButton.x = document.body.clientWidth - devModeButton.width - 100;
  devModeButton.y = document.body.clientHeight - devModeButton.height - 100;
  devModeButton.interactive = true;
  menu.addChild(devModeButton);
  devModeButton.on('click', () => {
    devMode = !devMode;
    devModeButton.style.fill = devMode ? 'red' : 'black';
  })

  for(const level of levels) {
    const text = new PIXI.Text(level.name);
    text.interactive = true;
    text.x = 50;
    text.y = y;
    y += 50;
    text.on('click', () => {
      started = true;
      menu.visible = false;
      startGame(app, level, devMode, () => {
        started = false;
        menu.visible = true;
      });
    });

    menu.addChild(text);
  }

});
