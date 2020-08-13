import Square from './entities/square.js';

let gameObjs;

function createWorld() {
  gameObjs = [
    new Square(ctx, 250, 50, 0, 50),
    new Square(ctx, 250, 300, 0, -50),
  ];
}


let fps;

let secondsPassed = 0;
let oldTimeStamp = 0;
let movingSpeed = 50;

let canvas;
let ctx;

let rectX = 0;
let rectY = 0;

window.onload = init;

function init() {
  canvas = document.createElement('canvas');
  canvas.width = 600;
  canvas.height = 480;
  ctx = canvas.getContext('2d');
  document.body.appendChild(canvas);
  createWorld();
  window.requestAnimationFrame(gameLoop);
}

function gameLoop(timeStamp) {
  secondsPassed = (timeStamp - oldTimeStamp) / 1000;

  // Limit time skip - will never move ahead more than 0.1 sec
  secondsPassed = Math.min(secondsPassed, 0.1);

  oldTimeStamp = timeStamp;

  fps = Math.round(1 / secondsPassed);

  update(secondsPassed);
  draw();
  window.requestAnimationFrame(gameLoop);
}

function update(secondsPassed) {
  // Move relative to time
  rectX += (movingSpeed * secondsPassed);
  rectY += (movingSpeed * secondsPassed);

  for (let i = 0; i < gameObjs.length; i++) {
    gameObjs[i].update(secondsPassed);
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#ff8080';
  ctx.fillRect(rectX, rectY, 150, 100);
  for (let i = 0; i < gameObjs.length; i++) {
    gameObjs[i].draw();
  }
  //showFPS();
}

function showFPS() {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, 120, 50);
  ctx.font = '25px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText('FPS: ' + fps, 10, 30);
}
