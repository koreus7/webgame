import { AnimatedSprite, Sprite } from '../lib.js';
import Entity from '../Entity.js';
import { ENEMY_IDLE_TEXTURE, ENEMY_CORPSE_TEXTURE, ENEMY_DEATH_SHEET } from '../assets.js';

export const EN_IDLE = 'IDLE';
export const EN_DEATH = 'DEATH';

export default class Enemy extends Entity {
  constructor({ x, y, layer, onDie }) {
    super(
      'enemy',
      {
        [EN_IDLE]: Sprite(ENEMY_IDLE_TEXTURE),
        [EN_DEATH]: AnimatedSprite(ENEMY_DEATH_SHEET, 'enemy-death', { loop: false, speed: 0.4 }),
      },
      EN_IDLE,
      { x: 500, y: 0, layer }
    );

  }

  onDie(cb) {
    this.states[EN_DEATH].onComplete = cb;
  }
}