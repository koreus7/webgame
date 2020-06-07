const MOVE_LEFT = 37;
const MOVE_RIGHT = 39;
const JUMP = 32;

export default class Controls {
  constructor() {
    this.moveLeft = 0;
    this.moveRight = 0;
    this.jump = 0;

    window.addEventListener('keydown', (event) => {
      switch(event.keyCode) {
        case MOVE_LEFT:
          this.moveLeft = 1;
          break;
        case MOVE_RIGHT:
          this.moveRight = 1;
          break;
        case JUMP:
          this.jump = 1;
          break;
      }
    });

    window.addEventListener('keyup', (event) => {
      switch(event.keyCode) {
        case MOVE_LEFT:
          this.moveLeft = 0;
          break;
        case MOVE_RIGHT:
          this.moveRight = 0;
          break;
          case JUMP:
            this.jump = 0;
            break;
      }
    });
  }

  getDirection() {
    return this.moveRight - this.moveLeft;
  }
}