class SplashScreen {
  w: number;
  h: number;
  x: number;
  y: number;

  public constructor(w: number, h: number, x: number, y: number) {
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
  }

  draw() {
    textFont(gameFont)
    textAlign(CENTER)
    let infoText: string =
     "Build a way to help poor Jonathan get to his beloved cigarette. \n But watch out for the vegetables at the bottom, \n Jonathan hates them and won´t survive a single bite..";
    fill("black");
    rect(this.x, this.y, this.w, this.h);
    fill("white");
    imageMode(CENTER);
    image(splashImg,  width / 2, height / 4.3 );
    textSize(24);
    text("click anywhere to start", width / 2, height / 2.5);
    textSize(20);
    text(infoText, width / 2, height / 2 + 20);
    // console.log(this.h, this.w);
  }
}


