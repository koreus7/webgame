export function loadAssets(assets, then) {
  return assets
    .reduce((loader, asset) => loader.add(asset), app.loader)
    .load(then);
}

export function getTexture(texture) {
  return app.loader.resources[texture].texture;
}

export function Sprite(texture, { x, y, visible = true, anchorY = 0 } = {}) {
  const sprite = new PIXI.Sprite(getTexture(texture));
  if(x) sprite.x = x;
  if(y) sprite.y = y;
  sprite.visible = visible;
  sprite.scale.set(2);
  sprite.anchor.x = 0.5;
  sprite.anchor.y = anchorY;
  return sprite;
}

export function AnimatedSprite(anim, { x, y, visible = true, anchorY = 0, speed = 1, loop = true } = {}) {
  const sprite = new PIXI.AnimatedSprite(anim);
  if(x) sprite.x = x;
  if(y) sprite.y = y;
  sprite.visible = visible;
  sprite.animationSpeed = speed;
  sprite.loop = loop;
  sprite.scale.set(2);
  sprite.anchor.x = 0.5;
  sprite.anchor.y = anchorY;
  return sprite;
}

export function getSheet(sheet) {
  return app.loader.resources[sheet].spritesheet;
}

export function getAnim(sheet, anim) {
  return sheet.animations[anim];
}

