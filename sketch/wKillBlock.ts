class KillBlock extends LevelObject {

  private deathscreen = new Deathscreen();

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
  fill(0, 0, 0, 0);
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
    this.deathscreen.draw();
    setTimeout(function(){loop()}, 3000);    
  }
}
}