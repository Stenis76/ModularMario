class Stone extends LevelObject {
  private sidebar = new Sidebar();
  public x: number;
  public y: number;
  public w: number;
  public h: number;

  constructor(x: number, y: number, w: number, h: number) {
    super(x, y, w, h);
    this.x = this.sidebar.w / 3;
    this.y = this.sidebar.h * 0.62;
    this.w = 30;
    this.h = 30;
  }

  public draw() {
    image(stoneImage, this.x, this.y, this.w, this.h);
  }

  public collide() {
    let block = {
      top: this.y,
      bottom: this.y + this.h,
      left: this.x,
      right: this.x + this.w,

      width: this.w,
      height: this.h
    };
    let char = {
      top: player.y,
      bottom: player.y + player.h,
      left: player.x,
      right: player.x + player.w,

      width: player.w,
      height: player.h
    };

    if (
      char.bottom > block.top &&
      char.top < block.bottom &&
      char.left < block.right &&
      char.right > block.left
    ) {
      //collision is true, check what sort of collision

      if (char.bottom > block.top && char.top < block.top && player.vy > 0) {
        player.y = block.top - char.height;
        player.vy = 0;
        player.onGround = true;
      }
      if (
        char.top < block.bottom &&
        char.bottom > block.bottom &&
        player.vy < 0
      ) {
        player.y = block.bottom;
        player.vy = 0;
      }
      if (
        char.right > block.left &&
        char.left < block.left &&
        player.vx > 0 &&
        !player.onGround
      ) {
        // console.log("touch left side of block");
        player.x = block.left - char.width;
      }
      if (
        char.left < block.right &&
        char.right > block.right &&
        player.vx < 0 &&
        !player.onGround
      ) {
        // console.log("touch right side of block");
        player.x = block.right;
      }
    }
  }
}
