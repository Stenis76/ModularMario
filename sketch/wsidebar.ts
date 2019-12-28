class Sidebar implements DrawArea{
  w: number = width * 0.25;
  h: number = height;
  x: number = 0;
  y: number = 0;        

  draw(currentLevel: number) {
    fill(150);    
    rect(this.x, this.y, this.w, this.h);
    fill(0);
    textSize(30);
    text(`Level: ${currentLevel + 1}`,this.w / 3, this.h * 0.1);   
  }
}