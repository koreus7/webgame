const MOVE_LEFT = 65;
const MOVE_RIGHT = 68;
const JUMP = 32;
const INTERACT = 69;
const DROP = 81;

export default class Controls {
  constructor(canvas, stage) {
    this.moveLeft = 0;
    this.moveRight = 0;
    this.jump = 0;
    this.interact = 0;
    this.drop = 0;
    this.aiming = false;
    this.mouse = null;

    stage.on('mousedown', this._handleMouseDown);

    stage.on('mousemove', this._handleMouseMove);

    stage.on('mouseup', this._handleMouseUp);

    window.addEventListener('keydown', this._handleKeyDown);
    window.addEventListener('keyup', this._handleKeyUp);
  }

  getDirection() {
    return this.moveRight - this.moveLeft;
  }

  destroy() {
    window.removeEventListener('keydown', this._handleKeyDown);
    window.removeEventListener('keyup', this._handleKeyUp);
  }

  _handleMouseDown = (event) => {
    if(event.dead) return;
    this.aiming = true;
  }

  _handleMouseMove = (event) => {
    if(event.dead) return;
    this.mouse = {
      x: event.data.global.x,
      y: event.data.global.y,
    }
  }

  _handleMouseUp = (event) => {
    if(event.dead) return;
    this.aiming = false;
  }

  _handleKeyUp = (event) => {
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
      case INTERACT:
        this.interact = 0;
        break;
      case DROP:
        this.drop = 0;
        break;
    }
  }

  _handleKeyDown = (event) => {
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
      case INTERACT:
        this.interact = 1;
        break;
      case DROP:
        this.drop = 1;
        break;
    }
  }
}
