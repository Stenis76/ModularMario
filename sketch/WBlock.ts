class Block extends LevelObject {
  public constructor(x: number, y: number, w: number, h: number) {
    super(x, y, w, h);
  }

  public draw() {
    noFill()
    image(blockImage, this.x, this.y, this.w, this.h);
    rect(this.x, this.y, this.w, this.h);
    redraw();
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

      if (
        // top
        char.bottom > block.top &&
        char.top < block.top &&
        player.vy > 0
      ) {
        player.y = block.top - char.height ;
        player.vy = 0;
        player.onGround = true;
      }
      if (
        // bottom
        char.top < block.bottom &&
        char.bottom > block.bottom &&
        player.vy < 0
      ) {
        player.y = block.bottom;
        player.vy = 0;
      }

      if (
        // left
        char.right > block.left &&
        char.left < block.left &&
        player.vx > 0 && 
        !player.onGround
      ) {
        // player.onWallLeft = true;
        player.x = block.left - char.width;
      }
      if (
        // right
        char.left < block.right &&
        char.right > block.right &&
        player.vx < 0 && 
        !player.onGround
      ) {
        // player.onWallRight = true;
        player.x = block.right
      }
    }
  }
}
