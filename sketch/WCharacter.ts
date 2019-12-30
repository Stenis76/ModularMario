class Character {
  private GA = new GameArea();
  
  public x: number;
  public y: number;
  public w: number;
  public h: number;
  public vy: number;
  public vx: number;
  public move: number;
  
  private gravity: number;
  private friction: number;

  public constructor(x: number, y: number, cellUnit: number) {
    this.x = x;
    this.y = y;
    this.w = cellUnit;
    this.h = cellUnit;
    this.vy = 0;
    this.vx = 0;
    this.gravity = 1;
    this.friction = 0.8;
    this.move = 0;
  }

  public jump() {
    this.vy = -15;
  }

  public update() {
    this.y += this.vy;
    this.x += this.vx;
    this.vy += this.gravity;
    this.vx = this.vx * this.friction;

    this.y = constrain(this.y, 0, this.GA.h - this.h);
  }

  public run() {
    if (keyIsDown(65)) {
      // move backwards
      this.move = -1.5;
      if (abs(this.vx) < 6) {
        this.vx += 1 * this.move;
      }
    }
    if (keyIsDown(68)) {
      // move forward
      this.move = 1.5;
      if (abs(this.vx) < 6) {
        this.vx += 1 * this.move;
      }
    }

    if (abs(this.vx) < 0.1) {
      this.vx = 0;
    }

    if (this.x < this.GA.x) {
      this.x = this.GA.x;
    } else if (this.x > this.GA.x + this.GA.w - this.w) {
      this.x = this.GA.x + this.GA.w - this.w;
    }
  }

  public show() {
    fill(22, 255, 255);
    rect(this.x, this.y, this.w, this.h);
  }
}
