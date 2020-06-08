import { AnimatedSprite, Sprite } from '../lib.js';
import Entity from '../Entity.js';
import { KNIFE_TEXTURE, KNIFE_WOBBLE_SHEET } from '../assets.js';

export default class Knife extends Entity {
  constructor({ player, layer, vector }) {
    super(
      'knife',
      {
        knife: Sprite(KNIFE_TEXTURE, { anchorY: 0.5 }),
        wobble: AnimatedSprite(KNIFE_WOBBLE_SHEET, 'knife-wobble', { loop: false, speed: 0.35, anchorY: 0.5 }),
      },
      'knife',
      { x: player.charger.x, y: player.charger.y, layer }
    );

    this.frozen = false;
    this.velocity.x = (vector.x * (player.charger.cone.currentFrame + 1) * 2);
    this.velocity.y = (vector.y * (player.charger.cone.currentFrame + 1) * 2);
  }
}