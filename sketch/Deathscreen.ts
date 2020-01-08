class Deathscreen {

    private x: number = 0;
    private y: number = 0;
    private w: number = windowWidth;
    private h: number = windowHeight; 

    public draw() {
        fill(0, 200);
        rect(this.x, this.y, this.w, this.h);
        fill(230);
        textSize(40);
        textFont(gameFont);
        text('Jonathan accidently ate some vegetables and are now', this.w / 2, this.h * 0.2);
        textSize(200); 
        fill('red');
        text('DEAD', this.w / 2, this.h * 0.4);
        textSize(40); 
        fill(230);
        text('Respawning.....', this.w / 2, this.h * 0.6);
    }
}