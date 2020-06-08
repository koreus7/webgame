import { getBB, anyCollide } from './collision.js';

export default class Entity {
  constructor(states, current, { x, y, index }) {
    this.facing = 1;
    this.gravityEnabled = true;
    this.states = {};
    for(const name in states) {
      this.states[name] = states[name];
      this.states[name].visible = false;
      if(index) {
        app.stage.addChildAt(this.states[name], index);
      } else {
        app.stage.addChild(this.states[name]);
      }
    }

    this.stateName = current;
    this.state = this.states[current];
    this.state.visible = true;
    this.state.x = x;
    this.state.y = y;
    this.velocity = { x: 0, y: 0 };
    this.isGrounded = false;
    this.triggers = [];
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

  addTrigger(trigger) {
    this.triggers.push(trigger);
  }

  updateTriggers(traceBB, player) {
    for(const trigger of this.triggers) {
      trigger.x = trigger.localX + this.state.x;
      trigger.y = trigger.localY + this.state.y;
      traceBB(getBB(trigger), 0x00ff00);
      if(anyCollide(getBB(player.state), [getBB(trigger)])) {
        if(!trigger.colliding) {
          trigger.onEnter();
          trigger.colliding = true;
        }
      } else {
        if(trigger.colliding) {
          trigger.onExit();
          trigger.colliding = false;
        }
      }
    }
  }
  
  destroy() {
    for(const key in this.states) {
      app.stage.removeChild(this.states[key]);
    }

    delete this.states;
  }
}
