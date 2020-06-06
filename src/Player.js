const WIDTH = 32;
const HEIGHT = 32;
const VELOCITY = 500;

export default class Player {
  constructor({ texture, x, y, controls }) {
    this.controls = controls;
    this.texture = texture;
    this.sprite = new PIXI.Sprite(texture); 
    this.vx = 0;
    this.sprite.x = x;
    this.sprite.y = y;
    this.body = Matter.Bodies.rectangle(x + WIDTH / 2, y + HEIGHT / 2, WIDTH, HEIGHT);
  }

  fixedUpdate() {
    this.vx = this.controls.getDirection();
    this.body.velocity.x = this.vx * VELOCITY;
    console.log(this.body.velocity);
  }

  update(dt) {
    this.sprite.x = this.body.position.x - HEIGHT / 2;
    this.sprite.y = this.body.position.y - HEIGHT / 2;
  }
}