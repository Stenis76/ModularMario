class FinishBlock extends LevelObject {
  public constructor(x: number, y: number, w: number, h: number) {
    super(x, y, w, h);
  }

  public draw() {
    fill("green");
    image(finishImage, this.x, this.y, this.w, this.h);
  }
  public collide() {

    console.log(
      "Finish Block" +
        "\n" +
        "X-position : " +
        this.x +
        "\n" +
        "Y-position : " +
        this.y
    );
  }
}
