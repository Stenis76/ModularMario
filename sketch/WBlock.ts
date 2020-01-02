class Block extends LevelObject {
  protected deadly: boolean;

  public constructor(
    x: number,
    y: number,
    w: number,
    h: number,
    deadly: boolean
  ) {
    super(x, y, w, h);
    this.deadly = deadly;
  }

  public draw() {
    fill("white");
    image(blockImage, this.x, this.y, this.w, this.h);
    redraw();
  }

  public collide(player: object) {
    let block = {
      top: this.y,
      bottom: this.y + this.h,
      left: this.x,
      right: this.x + this.w,
        
      width: this.w,
      height: this.h
    };


    // console.log(player);
    
  }
}
