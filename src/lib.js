export function loadAssets(assets) {
  return new Promise(resolve => {
    Object.values(assets)
      .reduce((loader, asset) => loader.add(asset), app.loader)
      .load(resolve);
  });
}

export function getTexture(texture) {
  return app.loader.resources[texture].texture;
}

export function Sprite(texture, { x, y, visible = true, anchorX = 0.5, anchorY = 0, layer } = {}) {
  const sprite = new PIXI.Sprite(getTexture(texture));
  sprite.name = texture.match(/\/([a-z-]+)\.png$/)[1];
  if(x) sprite.x = x;
  if(y) sprite.y = y;
  sprite.visible = visible;
  sprite.scale.set(2);
  sprite.anchor.x = anchorX;
  sprite.anchor.y = anchorY;
  layer && layer.addChild(sprite);
  return sprite;
}

export function AnimatedSprite(sheet, anim, { x, y, visible = true, anchorX = 0.5, anchorY = 0, speed = 1, loop = true, layer } = {}) {
  const sprite = new PIXI.AnimatedSprite(getAnim(getSheet(sheet), anim));
  sprite.name = anim
  if(x) sprite.x = x;
  if(y) sprite.y = y;
  sprite.visible = visible;
  sprite.animationSpeed = speed;
  sprite.loop = loop;
  sprite.scale.set(2);
  sprite.anchor.x = anchorX;
  sprite.anchor.y = anchorY;
  layer && layer.addChild(sprite);
  return sprite;
}

export function getSheet(sheet) {
  return app.loader.resources[sheet].spritesheet;
}

export function getAnim(sheet, anim) {
  return sheet.animations[anim];
}