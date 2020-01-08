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
  public onWall: boolean;

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
    this.onWall = false;
  }

  public jump() {
    this.vy = -this.cellUnit * 0.30;
    jumpSound.play();
    this.onGround = false;
  }

  // public wallJumpLeft() {
  //   this.vy = -this.cellUnit * .25;
  //   this.vx = -this.cellUnit * .1;
  //   jumpSound.play();
  //   this.onGround = false;
  // }
  // public wallJumpRight() {
  //   this.vy = -this.cellUnit * .25;
  //   this.vx = -this.cellUnit * .1;
  //   jumpSound.play();
  //   this.onGround = false;
  // }


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
    if(this.onGround) {
      this.onWall = false
    }
    if(this.onWall) {
      this.onGround = false
    }
    console.log(this.onWall);  
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
  }

  public abletoMovePlayer() {
    
  }

  public show() {
    fill(22, 255, 255);
    image(playerSprite,this.x, this.y, this.w, this.h);
  }
}
