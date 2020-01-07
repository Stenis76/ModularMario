class Block extends LevelObject {

  public constructor(
    x: number,
    y: number,
    w: number,
    h: number,
  ) 
  {
    super(x, y, w, h); 
  }

  public draw() {
    fill("white");
    image(blockImage, this.x, this.y, this.w, this.h);
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
      player.onGround = true;
      

      if (char.bottom > block.top && char.top < block.top) {
        // console.log("Standing on block");
        player.y = block.top - char.height;
        player.vy = 0;
      }
    }

  }
}
