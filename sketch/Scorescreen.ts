class Scorescreen {

    private x: number = 0;
    private y: number = 0;
    private w: number = windowWidth;
    private h: number = windowHeight;
    private score: number;

    public constructor(score: number) {
        this.score = score;
    }

    public draw() {
        clear();
        fill('black');
        rect(this.x, this.y, this.w, this.h);
        fill(100);
        textSize(30);
        textFont(gameFont); 
        text('Your Score:', this.w / 2, this.h / 3);
        text(`${this.score}`, this.w / 2, this.h / 2.5);
        if (this.score > 870) {
            image(goldImage, this.w / 2 - 60, this.h / 2, 120, 167);
        } else if (this.score > 770) {
            image(silverImage, this.w / 2 - 60, this.h / 2, 120, 167);
        } else {
            image(bronzeImage, this.w / 2 - 60, this.h / 2, 120, 167);
        }
    }
}