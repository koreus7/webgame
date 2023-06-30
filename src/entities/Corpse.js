import { AnimatedSprite, Sprite } from '../lib.js';
import Entity from '../Entity.js';
import { ENEMY_CORPSE_LEFT_TEXTURE, ENEMY_CORPSE_RIGHT_TEXTURE } from '../assets.js';

export const COR_LEFT = 'CORPSE_LEFT';
export const COR_RIGHT = 'CORPSE_RIGHT';

export default class Corpse extends Entity {
  constructor(state, { x, y, layer }) {
    super(
      'corpse',
      {
        [COR_LEFT]: Sprite(ENEMY_CORPSE_LEFT_TEXTURE),
        [COR_RIGHT]: Sprite(ENEMY_CORPSE_RIGHT_TEXTURE),
      },
      state,
      { x, y, layer }
    );

  }
}