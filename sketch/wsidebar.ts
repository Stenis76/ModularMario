class Sidebar implements DrawArea{
  w: number = width * 0.25;
  h: number = height;
  x: number = 0;
  y: number = 0;        

  draw(currentLevel: number, ladders: Array<LevelObject>, logs: Array<LevelObject>, stones: Array<LevelObject>) {
    fill(150);    
    rect(this.x, this.y, this.w, this.h);
    fill(0);
    textSize(30);
    text(`Level: ${currentLevel + 1}`,this.w / 3, this.h * 0.1);
    textSize(20); 
    text('Press "B" to enter Build Mode', this.x + 50, this.y + this.h - 50); 
    
    text(`X ${ladders.length}`, this.w / 2, this.h * 0.25);
    image(ladderImage, this.w / 3, this.h * 0.2, 30, 60);
    text(`X ${logs.length}`, this.x + this.w, this.y + 200);
    text(`X ${stones.length}`, this.x + this.w, this.y + 300);
     
  }
}