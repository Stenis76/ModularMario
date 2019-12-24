class EmptySpace extends LevelObject {
  public constructor(x: number, y: number, w: number, h: number) {
    super(x, y, w, h);
  }

  public draw() {
    noFill();
    stroke("#3332");

    rect(this.x, this.y, this.w, this.h);
  }
}
