class KillBlock extends LevelObject {

  public constructor(
    x: number,
    y: number,
    w: number,
    h: number,
  )
  {
    super(x, y, w, h)
  }

public draw() {
  fill(255,55,55,100)
  rect(this.x, this.y, this.w, this.h);
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
    deathSound.play()
    noLoop()
    player.x = gameController.spawnPoint.posX;
    player.y = gameController.spawnPoint.posY;
    setTimeout(function(){ alert("You dont like prompts? Dont die! Press ok to continue"); loop()}, 1000);
  }
}
}