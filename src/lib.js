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

const CAMERA_SCALE = 1;
export function bindDrag(sprite, drag) {
  let handle = null;
  sprite.interactive = true;

  sprite.on('mousedown', (event) => {
    event.dead = false;
    if(event.data.originalEvent.shiftKey) {
      handle = {
        x: event.data.global.x / CAMERA_SCALE - sprite.x,
        y: event.data.global.y / CAMERA_SCALE - sprite.y
      };
      event.dead = true;
    }
  });

  sprite.on('mouseup', (event) => {
    event.dead = false;
    if(handle) {
      handle = null;
      drag.x = sprite.x;
      drag.y = sprite.y;
      event.dead = true;
    }
  });

  sprite.on('mousemove', (event) => {
    event.dead = false;
    if(handle) {
      sprite.x = Math.round(event.data.global.x / CAMERA_SCALE - handle.x);
      sprite.y = Math.round(event.data.global.y / CAMERA_SCALE - handle.y);
      event.dead = true;
    }
  });
}

let lastDown = null;
export function bindClick(sprite, onClick) {
  sprite.interactive = true;
  sprite.on('mousedown', (event) => {
    event.dead = true;
    lastDown = sprite;
  });

  sprite.on('mouseup', (event) => {
    event.dead = false;
    if(lastDown == sprite) {
      onClick(event);
      event.dead = true;
    }
  });
}

export function ID() {
    return Math.random().toString(36).substr(2, 9);
}

export function Sprite(texture, { x, y, visible = true, anchorX = 0.5, anchorY = 0, layer, drag } = {}) {
  const sprite = new PIXI.Sprite(texture instanceof PIXI.Texture ? texture : getTexture(texture));
  const toMatch = texture instanceof PIXI.Texture && texture.textureCacheIds && texture.textureCacheIds.length? texture.textureCacheIds[0] : texture;
  sprite.name =  toMatch.match(/\/?([a-z-]+[0-9]*)\.png$/)[1];
  if(x) sprite.x = x;
  if(y) sprite.y = y;
  sprite.visible = visible;
  sprite.anchor.x = anchorX;
  sprite.anchor.y = anchorY;
  layer && layer.addChild(sprite);

  return sprite;
}

export function AnimatedSprite(sheet, { x, y, visible = true, anchorX = 0.5, anchorY = 0, speed = 1, loop = true, layer, drag } = {}) {
  const anim = sheet.match(/\/([a-z-]+)\.json$/)[1];
  const sprite = new PIXI.AnimatedSprite(getAnim(getSheet(sheet), anim));
  sprite.name = anim;
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
