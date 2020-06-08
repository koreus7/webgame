import { AnimatedSprite, Sprite } from '../lib.js';
import Entity from '../Entity.js';
import { PLAYER_IDLE_SHEET, PLAYER_JUMP_TEXTURE, PLAYER_RUN_SHEET, PLAYER_DRAG_SHEET } from '../assets.js';

export const PS_IDLE = 'IDLE';
export const PS_WALKING = 'WALKING';
export const PS_JUMPING = 'JUMPING';
export const PS_DRAGGING  = 'DRAGGING';

export default class Player extends Entity {
  constructor({ x, y, layer }) {
    super(
      'player',
      {
        [PS_IDLE]: AnimatedSprite(PLAYER_IDLE_SHEET, 'idle', { speed: 0.2 }),
        [PS_JUMPING]: Sprite(PLAYER_JUMP_TEXTURE),
        [PS_WALKING]: AnimatedSprite(PLAYER_RUN_SHEET, 'run', { speed: 0.2 }),
        [PS_DRAGGING]: AnimatedSprite(PLAYER_DRAG_SHEET, 'drag', { speed: 0.2 } ),
      },
      PS_IDLE,
      { x, y, layer }
    );
  }
}