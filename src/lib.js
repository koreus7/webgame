export function loadAssets(assets, then) {
  return assets
    .reduce((loader, asset) => loader.add(asset), app.loader)
    .load(then);
}

export function getTexture(texture) {
  return app.loader.resources[texture].texture;
}

export function Sprite(texture, { x, y, visible = true } = {}) {
  const sprite = new PIXI.Sprite(getTexture(texture));
  if(x) sprite.x = x;
  if(y) sprite.y = y;
  sprite.visible = visible;
  sprite.anchor.x = 0.5;
  return sprite;
}

export function AnimatedSprite(anim, { x, y, visible = true, speed = 1 } = {}) {
  const sprite = new PIXI.AnimatedSprite(anim);
  if(x) sprite.x = x;
  if(y) sprite.y = y;
  sprite.visible = visible;
  sprite.animationSpeed = speed;
  sprite.anchor.x = 0.5;
  return sprite;
}

export function getSheet(sheet) {
  return app.loader.resources[sheet].spritesheet;
}

export function getAnim(sheet, anim) {
  return sheet.animations[anim];
}

export function getBB(obj) {
  return { left: obj.x, top: obj.y, right: obj.x + obj.width, bottom: obj.y + obj.height };
}

function isBetween(v, start, end) {
  return v >= start || v < end;
}

export function playerCollides(player, walls) {
  const collided = [];
  for(let i = 0; i < walls.length; i++) {
    const wall = walls[i];
    if(
      player.left < wall.right &&
      player.right > wall.left &&
      player.top < wall.bottom &&
      player.bottom > wall.top) {
        collided.push(wall);
      }
  }

  return collided
};
