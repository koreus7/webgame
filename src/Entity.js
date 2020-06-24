import { getBB, anyCollide } from './collision.js';

export default class Entity {
  constructor(name, states, current, { x, y, layer }) {
    this.name = name;
    this.layer = layer;
    this.facing = 1;
    this.gravityEnabled = true;
    this.states = {};
    for(const name in states) {
      this.states[name] = states[name];
      this.states[name].visible = false;
        layer.addChild(this.states[name]);
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
    state.angle = this.state.angle;
    state.visible = true;
    state.scale.x = this.state.scale.x;
    this.state = state;
    this.stateName = newState;

    if(this.state instanceof PIXI.AnimatedSprite) {
      this.state.gotoAndPlay(0);
    }
  }

  setFacing(facing) {
    this.facing = facing;
    this.state.scale.x = 2 * facing;
  }

  addTrigger(trigger) {
    this.triggers.push(trigger);
  }

  setVelocity({ x = null, y = null}) {
    if(typeof x === 'number') this.velocity.x = x;
    if(typeof y === 'number') this.velocity.y = y;
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
      this.layer.removeChild(this.states[key]);
    }

    delete this.states;
    delete this.layer;
  }
}
