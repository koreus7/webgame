

export default class Entity {
  constructor(states, current, { x, y }) {
    this.facing = 1;
    this.states = {};
    for(const name in states) {
      this.states[name] = states[name];
      this.states[name].visible = false;
      app.stage.addChild(this.states[name]);
    }

    this.stateName = current;
    this.state = this.states[current];
    this.state.visible = true;
    this.state.x = x;
    this.state.y = y;
    this.velocity = { x: 0, y: 0 };
    this.isGrounded = false;
  }

  setState(newState) {
    const state = this.states[newState];
    this.state.visible = false;
    state.x = this.state.x;
    state.y = this.state.y;
    state.visible = true;
    state.scale.x = this.state.scale.x;
    this.state = state;
    this.stateName = newState;

    if(this.state instanceof PIXI.AnimatedSprite) {
      this.state.gotoAndPlay(0);
    }
  }

  setFacing(facing) {
    this.state.scale.x = 2 * facing;
  }
}