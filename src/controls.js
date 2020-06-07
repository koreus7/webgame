const MOVE_LEFT = 65;
const MOVE_RIGHT = 68;
const JUMP = 32;

export default class Controls {
  constructor(canvas) {
    this.moveLeft = 0;
    this.moveRight = 0;
    this.jump = 0;
    this.aiming = false;
    this.mouse = null;

    canvas.addEventListener('mousedown', (event) => {
      const canvasBB = canvas.getBoundingClientRect();
      this.aiming = true;
    });

    canvas.addEventListener('mousemove', (event) => {
        const canvasBB = canvas.getBoundingClientRect();
        this.mouse = {
          x: event.clientX - canvasBB.left,
          y: event.clientY - canvasBB.top,
        }
    });

    canvas.addEventListener('mouseup', (event) => {
      this.aiming = false;
    });

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