const WIDTH = 128;
const HEIGHT = 16;

export default class Ground {
  constructor({ texture, x, y }) {
    this.texture = texture;
    this.sprite = new PIXI.Sprite(texture);

    this.body = Matter.Bodies.rectangle(x + WIDTH / 2, y + HEIGHT / 2, WIDTH, HEIGHT, { isStatic: true });
  }

  update(dt) {
    this.sprite.x = this.body.position.x - WIDTH / 2;
    this.sprite.y = this.body.position.y - HEIGHT / 2;
  }
}