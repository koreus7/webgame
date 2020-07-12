import { between, magnitude } from './lib.js';

export function getBB(obj) {
  const width = obj.width * obj.scale.x;
  const height = obj.height * obj.scale.y;
  const xOffs = obj.anchor.x * width;
  const yOffs = obj.anchor.y * height;
  return {
    name: obj.name,
    left: obj.x - xOffs,
    top: obj.y - yOffs,
    right: obj.x + (width - xOffs),
    bottom: obj.y + (height - yOffs)
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


export function entityCollides(entity, entityBB, wallBBs, circleBBs) {
  for(let i = 0; i < wallBBs.length; i++) {
    const wallBB = wallBBs[i];
    if(
      entityBB.left < wallBB.right &&
      entityBB.right > wallBB.left &&
      entityBB.top < wallBB.bottom &&
      entityBB.bottom > wallBB.top) {
        return { type: 'square', ...wallBB };
      }
  }

  for(let i = 0; i < circleBBs.length; i++) {
    console.log('comparing', entity, circleBBs[i]);
    const d = between(entity, circleBBs[i]);
    console.log('ent', entity.x, entity.y);
    console.log('bb', circleBBs[i].x, circleBBs[i].y);
    console.log('d', d);
    console.log('mag', magnitude(d));
    if(magnitude(d) < 24) {
      return { type: 'circle', d, bb: circleBBs[i] };
    }
  }

  return null;
};
