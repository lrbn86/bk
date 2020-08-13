import GameObject from './gameobject.js';

export default class Square extends GameObject {

  constructor(ctx, x, y, vx, vy) {
    super(ctx, x, y, vx, vy);
    this.width = 50;
    this.height = 50;
  }

  draw() {
    this.ctx.fillStyle = this.isColliding ? '#ff8080' : '#0099b0';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    
  }

  update(secondsPassed) {
    this.x += this.vx * secondsPassed;
    this.y += this.vy * secondsPassed;
  }
}
