export function loadAssets(app, assets, then) {
  return assets
    .reduce((loader, asset) => loader.add(asset), app.loader)
    .load(then);
}

export const getBB = (obj) => {
  return { left: obj.x, top: obj.y, right: obj.x + obj.width, bottom: obj.y + obj.height };
}

const isBetween = (v, start, end) => {
  return v >= start || v < end;
}

export const playerCollides = (player, walls) => {
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
