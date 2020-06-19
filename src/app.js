import { loadAssets } from './lib.js';
import * as assets from './assets.js';
import startGame from './play.js';

const app = window.app = new PIXI.Application({
  backgroundColor: 0x00ffff,
  width: document.body.clientWidth - 40,
  height: document.body.clientHeight - 40,
});

app.view.style.margin = '20px';

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

document.body.appendChild(app.view);

const level = [
  { type: 'player', x: 100, y: 25 },
  { type: 'enemy', x: 500, y: 0 },
  { type: 'cabin', x: 200, y: 0 },
  { type: 'cabin', x: 600, y: 0 },
  { type: 'candle', x: 120, y: 43 },
  { type: 'ground', x: 100, y: 128 },
  { type: 'barrel', x: 500, y: 83 },
  { type: 'oven', x: 30, y: 41 }
];

loadAssets(assets, () => {
  startGame(app, level);
});