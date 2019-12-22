class Sidebar implements DrawArea{
  w: number = width * 0.25;
  h: number = height;
  x: number = 0;
  y: number = 0;
  currentLevel: number;

  constructor(currentLevel: number) {
    this.currentLevel = currentLevel;
  }

  draw() {
    fill(150);    
    rect(this.x, this.y, this.w, this.h);
    fill(0);
    text(`Level: ${this.currentLevel + 1}`,this.w / 3, this.h * 0.1);
    ellipse(this.w / 2, this.h * 0.9, 100, 100)
  }
}