console.log("Hello PixiJS");

const options = { 
    backgroundColor: 0xf0e2e2,
    width: 800,
    height: 600,
};

const app = new PIXI.Application(options);

document.body.appendChild(app.view);

app.loader
    .add('hero-sheet', '/assets/images/test-sprite.json')
    .load(onLoaded);

function onLoaded() {
    // Text
    const basicText = new PIXI.Text(`Hello World! ${window.__DEV_MODE ? 'dev' : 'release'}`);
    basicText.x = 50;
    basicText.y = 100;

    app.stage.addChild(basicText);

    // Sound
    let sound = null;
    app.view.addEventListener('click', function() {
        if(sound) {
            sound.play();
        } else {
            const sound = new Pizzicato.Sound('./assets/sound/kick.wav', function() {
                // Sound loaded!
                sound.play();
            });
        }

    }, false);

    // Sprites
    const sheet = app.loader.resources["hero-sheet"].spritesheet;
    const sprite = new PIXI.AnimatedSprite(sheet.animations["adventurer-run"]);
    sprite.animationSpeed = 0.25;
    sprite.play();
    app.stage.addChild(sprite);

    
}
