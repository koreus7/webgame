import { CANDLE_TEXTURE, CANDLE_SHEET, CANDLE_LIGHT_TEXTURE } from './assets.js';
import { Sprite, AnimatedSprite } from './lib.js';

export default class Candle {
  constructor({ backgroundLayer, lightLayer, candleLightConfig }) {
    this.candleLightConfig = candleLightConfig;
    this.candle = AnimatedSprite(CANDLE_SHEET, 'candle_animated', { x: 120, y: 43, speed: 0.2, layer: backgroundLayer });
    this.candle.play();

    this.candleLight = Sprite(CANDLE_LIGHT_TEXTURE);
    this.candleLight.anchor.y = 0.5;
    this.candleLight.blendMode = PIXI.BLEND_MODES.LIGHTEN;
    lightLayer.addChild(this.candleLight);
  }

  step() {
    this.candleLight.x = this.candle.x + this.candleLightConfig.xOffset;
    this.candleLight.y = this.candle.y + this.candleLightConfig.yOffset;
    this.candleLight.alpha = this.candleLightConfig.alpha;
  }
}