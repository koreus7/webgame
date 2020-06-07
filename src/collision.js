export function getBB(obj) {
  return {
    left: obj.x - (obj.width / 2),
    top: obj.y,
    right: obj.x + (obj.width / 2),
    bottom: obj.y + obj.height
  };
}

function isBetween(v, start, end) {
  return v >= start || v < end;
}

export function entityCollides(entityBB, wallBBs) {
  const collisions = [];
  for(let i = 0; i < wallBBs.length; i++) {
    const wallBB = wallBBs[i];
    if(
      entityBB.left < wallBB.right &&
      entityBB.right > wallBB.left &&
      entityBB.top < wallBB.bottom &&
      entityBB.bottom > wallBB.top) {
        collisions.push(wallBB);
      }
  }

  return collisions;
};
