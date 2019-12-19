class Sidebar implements DrawArea{
  w: number = width * 0.25;
  h: number = height;
  x: number = 0;
  y: number = 0;

  draw() {
    fill(200)
    rect(this.x, this.y, this.w, this.h)
  }
}