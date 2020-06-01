console.log("Hello PixiJS");

const options = { 
    backgroundColor: 0xf0e2e2,
    width: 800,
    height: 600,
};

const app = new PIXI.Application(options);

document.body.appendChild(app.view);

const basicText = new PIXI.Text('Hello World!');
basicText.x = 50;
basicText.y = 100;

app.stage.addChild(basicText);
