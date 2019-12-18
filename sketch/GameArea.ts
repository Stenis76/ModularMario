class GameArea {
    w: number = height;
    h: number = height;
    x: number = width / 4;
    y: number = 0;
  
    draw() {
      fill(100)
      rect(this.x, this.y, this.w, this.h)
    }
  }