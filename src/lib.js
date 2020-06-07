export function loadAssets(app, assets, then) {
  return assets
    .reduce((loader, asset) => loader.add(asset), app.loader)
    .load(then);
}

export function getTexture(app, texture) {
  return app.loader.resources[texture].texture;
}

export function getSheet(app, sheet) {
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
