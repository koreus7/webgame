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
  const menu = new PIXI.Container();
  app.stage.addChild(menu);
  let y = 50;

  for(const level of levels) {
    const text = new PIXI.Text(level.name);
    text.interactive = true;
    text.x = 50;
    text.y = y;
    y += 50;
    text.on('click', () => {
      menu.visible = false;
      startGame(app, level);
    });

    menu.addChild(text);
  }
});
