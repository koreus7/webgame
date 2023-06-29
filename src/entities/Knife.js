import { AnimatedSprite, Sprite } from '../lib.js';
import Entity from '../Entity.js';
import { KNIFE_GLOW_SHEET, KNIFE_TEXTURE, KNIFE_WOBBLE_SHEET } from '../assets.js';

export default class Knife extends Entity {
  constructor({ frozen = false, ...props }) {
    super(
      'knife',
      {
        knife: Sprite(KNIFE_TEXTURE, { anchorY: 0.5 }),
        wobble: AnimatedSprite(KNIFE_WOBBLE_SHEET, { loop: false, speed: 0.35, anchorY: 0.5 }),
        glow: AnimatedSprite(KNIFE_GLOW_SHEET, { loop: true, speed: 0.025, anchorY: 0.5 }),
      },
      'knife',
      props
    );

    this.frozen = frozen;
  }

  freeze() {
    this.frozen = true;
    this.setState('wobble');
    this.states.wobble.onComplete = () => {
      this.setState('glow');
    };
  }
}