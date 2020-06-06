import GUI from './gui.js';
import Player from './Player.js';
import Ground from './Ground.js';
import Controls from './Controls.js';

const PLAYER_TEXTURE = './assets/images/player.png';
const GROUND_TEXTURE = './assets/images/ground.png';

const app = new PIXI.Application({
  backgroundColor: 0xf0e2e2,
  width: 800,
  height: 600,
});

const engine = Matter.Engine.create();
const world = engine.world;
world.gravity.y = 1;

document.body.appendChild(app.view);

app.loader
    .add(PLAYER_TEXTURE)
    .add(GROUND_TEXTURE)  
    .load(setup);

function setup() {
    const dat = window.dat || null;
    GUI.init(dat);

    const controls = new Controls();
    controls.listen(window);

    const player = new Player({
      controls,
      texture: app.loader.resources[PLAYER_TEXTURE].texture,
      x: 100,
      y: 25
    });

    const ground = new Ground({
      texture: app.loader.resources[GROUND_TEXTURE].texture,
      x: 0,
      y: 100,
    });

    app.stage.addChild(player.sprite);
    app.stage.addChild(ground.sprite);
    Matter.World.add(world, [player.body]);
    Matter.World.add(world, [ground.body]);

    setInterval(() => {
      Matter.Engine.update(engine, 1000 / 60);
      player.fixedUpdate();
    }, 1000 / 60);

    app.ticker.add(delta => {
      player.update(delta);
      ground.update(delta);
    });
}
