import Entity from "./Entity.js";

export function getBB(obj) {
  if(obj instanceof Entity) {
    return {
      ...getBB(obj.state),
      name: obj.name
    };
  }
  return {
    name: obj.name,
    left: obj.x - (obj.width / 2),
    top: obj.y,
    right: obj.x + (obj.width / 2),
    bottom: obj.y + obj.height
  };
}

export function fakeBB(c, w, h) {
  return {
    left: c.x - w / 2,
    top: c.y - h / 2,
    right: c.x + w / 2,
    bottom: c.y + h / 2
  };
}

function isBetween(v, start, end) {
  return v >= start || v < end;
}

export function anyCollide(entityBB, wallBBs) {
  for(let i = 0; i < wallBBs.length; i++) {
    const wallBB = wallBBs[i];
    if(
      entityBB.left < wallBB.right &&
      entityBB.right > wallBB.left &&
      entityBB.top < wallBB.bottom &&
      entityBB.bottom > wallBB.top) {
        return true;
      }
  }

  return false;
};


export function entityCollides(entityBB, wallBBs) {
  const collisions = [];
  for(let i = 0; i < wallBBs.length; i++) {
    const wallBB = wallBBs[i];
    if(
      entityBB.left < wallBB.right &&
      entityBB.right > wallBB.left &&
      entityBB.top < wallBB.bottom &&
      entityBB.bottom > wallBB.top) {
        return wallBB;
      }
  }

  return null;
};
