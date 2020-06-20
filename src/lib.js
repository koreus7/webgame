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

export function Sprite(texture, { x, y, visible = true, anchorX = 0.5, anchorY = 0, layer, drag } = {}) {
  const sprite = new PIXI.Sprite(texture instanceof PIXI.Texture ? texture : getTexture(texture));
  sprite.name = texture.match(/\/([a-z-]+)\.png$/)[1];
  if(x) sprite.x = x;
  if(y) sprite.y = y;
  sprite.visible = visible;
  sprite.scale.set(2);
  sprite.anchor.x = anchorX;
  sprite.anchor.y = anchorY;
  layer && layer.addChild(sprite);

  if(drag) {
    let handle = null;
    sprite.interactive = true;
    sprite.on('mousedown', (event) => {
      handle = {
        x: event.data.global.x / 2 - sprite.x,// - (sprite.width * sprite.anchor.x),
        y: event.data.global.y / 2 - sprite.y
      };
      event.dead = true;
    });
    sprite.on('mouseup', (event) => {
      handle = null;
      drag.x = sprite.x;
      drag.y = sprite.y;
      event.dead = true;
    })
    sprite.on('mousemove', (event) => {
      if(handle) {
        sprite.x = event.data.global.x / 2 - handle.x;
        sprite.y = event.data.global.y / 2 - handle.y;
      }
      event.dead = true;
    });
  }
  return sprite;
}

export function AnimatedSprite(sheet, anim, { x, y, visible = true, anchorX = 0.5, anchorY = 0, speed = 1, loop = true, layer, drag } = {}) {
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

  if(drag) {
    let handle = null;
    sprite.interactive = true;
    sprite.on('mousedown', (event) => {
      handle = {
        x: event.data.global.x / 2 - sprite.x,// - (sprite.width * sprite.anchor.x),
        y: event.data.global.y / 2 - sprite.y
      };
      event.dead = true;
    });
    sprite.on('mouseup', (event) => {
      handle = null;
      drag.x = sprite.x;
      drag.y = sprite.y;
      event.dead = true;
    })
    sprite.on('mousemove', (event) => {
      if(handle) {
        sprite.x = event.data.global.x / 2 - handle.x;
        sprite.y = event.data.global.y / 2 - handle.y;
      }
      event.dead = true;
    });
  }
  
  return sprite;
}

export function getSheet(sheet) {
  return app.loader.resources[sheet].spritesheet;
}

export function getAnim(sheet, anim) {
  return sheet.animations[anim];
}