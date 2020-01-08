class GameArea implements DrawArea{
    w: number = height;
    h: number = height;
    x: number = width / 4;
    y: number = 0;
  
    draw() {
      fill(100)
      imageMode(CORNER);
      image(backgroundImage,this.x, this.y, this.w, this.h)
    }
  }