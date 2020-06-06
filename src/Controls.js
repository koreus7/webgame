const MOVE_LEFT = 37; // left arrow
const MOVE_RIGHT = 39; // right arrow

export default class Controls {
  constructor () {
    this.left = 0;
    this.right = 0;
  }

  listen(dom) {
    dom.addEventListener('keydown', (event) => {
      switch(event.keyCode) {
        case MOVE_LEFT:
          this.left = 1;
          break;
        case MOVE_RIGHT:
          this.right = 1;
          break;
      }
    });

    dom.addEventListener('keyup', (event) => {
      switch(event.keyCode) {
        case MOVE_LEFT:
          this.left = 0;
          break;
        case MOVE_RIGHT:
          this.right = 0;
          break;
      }
    });
  }

  getDirection() {
    return this.right - this.left;
  }
}