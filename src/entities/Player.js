import { AnimatedSprite, Sprite, replaceSheet, replaceTexture } from '../lib.js';
import Entity from '../Entity.js';
import { PLAYER_IDLE_SHEET, PLAYER_IDLE_UNARMED_SHEET, PLAYER_JUMP_TEXTURE, PLAYER_JUMP_UNARMED_TEXTURE, PLAYER_RUN_SHEET, PLAYER_DRAG_SHEET, PLAYER_RUN_UNARMED_SHEET } from '../assets.js';

export const PS_IDLE = 'IDLE';
export const PS_WALKING = 'WALKING';
export const PS_JUMPING = 'JUMPING';
export const PS_DRAGGING  = 'DRAGGING';

export default class Player extends Entity {
  constructor({ x, y, layer }) {
    super(
      'player',
      {
        [PS_IDLE]: AnimatedSprite(PLAYER_IDLE_SHEET, { speed: 0.05 }),
        [PS_JUMPING]: Sprite(PLAYER_JUMP_TEXTURE),
        [PS_WALKING]: AnimatedSprite(PLAYER_RUN_SHEET, { speed: 0.2 }),
        [PS_DRAGGING]: AnimatedSprite(PLAYER_DRAG_SHEET, { speed: 0.2 } ),
      },
      PS_IDLE,
      { x, y, layer }
    );

    this._knives = 3;
  }

  get knives() {
    return this._knives;
  }

  set knives(knives) {
    this._knives = knives;
    if(knives === 0) {
      replaceSheet(this.states[PS_WALKING], PLAYER_RUN_UNARMED_SHEET);
      replaceSheet(this.states[PS_IDLE], PLAYER_IDLE_UNARMED_SHEET);
      replaceTexture(this.states[PS_JUMPING], PLAYER_JUMP_UNARMED_TEXTURE);
    } else {
      replaceSheet(this.states[PS_WALKING], PLAYER_RUN_SHEET);
      replaceSheet(this.states[PS_IDLE], PLAYER_IDLE_SHEET);
      replaceTexture(this.states[PS_JUMPING], PLAYER_JUMP_TEXTURE);
    }
  }
}