console.log("Hello PixiJS");

const options = { 
    backgroundColor: 0xf0e2e2,
    width: 800,
    height: 600,
};

const app = new PIXI.Application(options);

document.body.appendChild(app.view);

app.loader
    .add('hero-sheet', './assets/images/test-sprite.json')
    .load(onLoaded);

function onLoaded() {

    // Text
    const text = new PIXI.Text(`Hello World! 123 ${window.__DEV_MODE ? 'dev' : 'release'}`);
    text.x = 50;
    text.y = 100;

    app.stage.addChild(text);

    // Sprites
    const sheet = app.loader.resources["hero-sheet"].spritesheet;
    const run = new PIXI.AnimatedSprite(sheet.animations["adventurer-run"]);
    run.animationSpeed = 0.25;
    run.play();
    app.stage.addChild(run);
    run.visible = true;

    const attack = new PIXI.AnimatedSprite(sheet.animations["adventurer-attack1"]);
    attack.animationSpeed = 0.25;
    attack.play();
    app.stage.addChild(attack);
    attack.visible = false;

    // Sound
    let sound = null;
    app.view.addEventListener('click', function() {
        if(sound) {
            sound.play();
            run.gotoAndStop(0);
            run.visible = false;
            attack.visible = true;
            attack.loop = false;
            attack.gotoAndStop(0);
            attack.play();
            attack.onComplete = () => {
                attack.visible = false;
                run.visible = true;
                run.play();
            };
        } else {
            sound = new Howl({
                src: ['./assets/sound/swoosh1.wav']
            });
            // Clear listener after first call.
            sound.once('load', function(){
                sound.play();
            });
        }
    }, false);



    
}
