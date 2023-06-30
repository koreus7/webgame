import { AnimatedSprite, Sprite } from '../lib.js';
import Entity from '../Entity.js';
import { ENEMY_IDLE_TEXTURE, ENEMY_DEATH_LEFT_SHEET, ENEMY_DEATH_RIGHT_SHEET } from '../assets.js';

export const EN_IDLE = 'IDLE';
export const EN_DEATH_LEFT = 'DEATH_LEFT';
export const EN_DEATH_RIGHT = 'DEATH_RIGHT';

export default class Enemy extends Entity {
  constructor({ x, y, layer }) {
    super(
      'enemy',
      {
        [EN_IDLE]: Sprite(ENEMY_IDLE_TEXTURE),
        [EN_DEATH_LEFT]: AnimatedSprite(ENEMY_DEATH_LEFT_SHEET, { loop: false, speed: 0.3 }),
        [EN_DEATH_RIGHT]: AnimatedSprite(ENEMY_DEATH_RIGHT_SHEET, { loop: false, speed: 0.3 }),
      },
      EN_IDLE,
      { x, y, layer }
    );

  }

  onDie(cb) {
    this.states[EN_DEATH_LEFT].onComplete = cb;
    this.states[EN_DEATH_RIGHT].onComplete = cb;
  }
}