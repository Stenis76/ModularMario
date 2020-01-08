class Character {
  private GA = new GameArea();
  private sidebar = new Sidebar()

  public x: number;
  public y: number;
  public w: number;
  public h: number;
  public vy: number;
  public vx: number;
  public move: number;
  public cellUnit: number;
  public onGround: boolean;

  private gravity: number;
  private friction: number;

  public constructor(x: number, y: number, cellUnit: number) {
    this.cellUnit = cellUnit;
    this.x = x;
    this.y = y;
    this.w = cellUnit * 0.7;
    this.h = cellUnit * 0.9;
    this.vy = 0;
    this.vx = 0;
    this.gravity = cellUnit / 50;
    this.friction = cellUnit / 60;
    this.move = 0;
    this.onGround = false;
  }

  public jump() {
    this.vy = -this.cellUnit / Math.PI;
    jumpSound.play();
    this.onGround = false;
  }

  public update() {
    this.y += this.vy;
    this.x += this.vx;
    this.vy += this.gravity;
    this.vx = this.vx * this.friction;

    this.y = constrain(this.y, 0, this.GA.h - this.h);
    this.x = constrain(this.x, this.sidebar.w, this.GA.w + this.sidebar.w - this.w);

    if (this.vy > 2 * this.gravity) {
      // falling
      this.onGround = false;
    }
  }

  public run() {
    if (keyIsDown(65)) {
      // move backwards
      this.move = -this.cellUnit * 0.05;
      if (abs(this.vx) < 6) {
        this.vx += this.move;
      }
    }
    if (keyIsDown(68)) {
      // move forward
      this.move = this.cellUnit * 0.05;
      if (abs(this.vx) < 6) {
        this.vx += this.move;
      }
    }

    if (abs(this.vx) < 0.1) {
      this.vx = 0;
    }

    // if (this.x < this.GA.x) {
    //   this.x = this.GA.x;
    // }
    // if (this.x > this.GA.x + this.GA.w - this.w) {
    //   this.x = this.GA.x + this.GA.w - this.w;
    // }
  }

  public abletoMovePlayer() {
    
  }

  public show() {
    fill(22, 255, 255);
    rect(this.x, this.y, this.w, this.h);
  }
}
