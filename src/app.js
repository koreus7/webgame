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
Promise.all([
  fetch('/levels').then(response => response.json()),
  loadAssets(assets)
]).then(([levels]) => {
  startGame(app, levels[0]);
});
