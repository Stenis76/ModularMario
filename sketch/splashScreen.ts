class SplashScreen {
  w: number;
  h: number;
  x: number;
  y: number;

  constructor(w: number, h: number, x: number, y: number) {
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
  }

  draw() {
    fill("pink");
    rect(this.x, this.y, this.w, this.h);
    // console.log(this.h, this.w);
  }
}
