

export default class Trigger {
  constructor({localX, localY, width, height}, { onEnter, onExit }) {
    this.localX = localX;
    this.localY = localY;
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.colliding = false;
    this.onEnter = onEnter;
    this.onExit = onExit;
  }
}
