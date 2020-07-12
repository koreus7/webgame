const ARROW_LEFT = 65;
const ARROW_UP = 87;
const ARROW_RIGHT = 68;
const ARROW_DOWN = 83;

export default class Controls {
  constructor() {
    this.left = 0;
    this.right = 0;
    this.up = 0;
    this.down = 0;

    document.addEventListener('keydown', (event) => {
      switch(event.which) {
        case ARROW_LEFT:
          this.left = 1;
          break;
        case ARROW_RIGHT:
          this.right = 1;
          break;
        case ARROW_UP:
          this.up = 1;
          break;
        case ARROW_DOWN:
          this.down = 1;
          break;
      }
    });

    document.addEventListener('keyup', (event) => {
      switch(event.which) {
        case ARROW_LEFT:
          this.left = 0;
          break;
        case ARROW_RIGHT:
          this.right = 0;
          break;
        case ARROW_UP:
          this.up = 0;
          break;
        case ARROW_DOWN:
          this.down = 0;
          break;
      }
    });
  }

  getVert() {
    return this.down - this.up;
  }
  getHori() {
    return this.right - this.left;
  }
}