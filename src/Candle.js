import { CANDLE_TEXTURE, CANDLE_SHEET, CANDLE_LIGHT_TEXTURE } from './assets.js';
import { Sprite, AnimatedSprite, bindDrag } from './lib.js';

export default class Candle {
  constructor({ x, y, backgroundLayer, lightLayer, candleLightConfig, drag }) {
    this.candleLightConfig = candleLightConfig;
    this.candle = AnimatedSprite(CANDLE_SHEET, 'candle_animated', { x, y, speed: 0.2, layer: backgroundLayer });
    this.candle.play();

    this.candleLight = Sprite(CANDLE_LIGHT_TEXTURE);
    this.candleLight.anchor.y = 0.5;
    this.candleLight.blendMode = PIXI.BLEND_MODES.LIGHTEN;
    lightLayer.addChild(this.candleLight);

    if(drag) {
      bindDrag(this.candle, drag);
    }
  }

  step() {
    this.candleLight.x = this.candle.x + this.candleLightConfig.xOffset;
    this.candleLight.y = this.candle.y + this.candleLightConfig.yOffset;
    this.candleLight.alpha = this.candleLightConfig.alpha;
  }
}