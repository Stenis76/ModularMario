class FinishBlock extends LevelObject {
  public constructor(x: number, y: number, w: number, h: number) {
    super(x, y, w, h);
  }

  public draw() {
    fill("green");
    image(finishImage, this.x, this.y, this.w, this.h);
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
      currentScreen = 3;
      player.x = 200;
      player.y = 200; //Fulsätt att få bort spelaren från cigaretten     
    }
  }
}
