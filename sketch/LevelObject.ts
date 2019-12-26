class LevelObject {    
    public x: number;
    public y: number;
    public w: number;
    public h: number;

    protected constructor(x: number, y: number, w: number, h: number) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    public draw() {
        fill(0, 0, 0, 0);
        stroke(0, 0, 0, 0);
        rect(this.x, this.y, this.w, this.h)
    }

    public drawText(amount: number) {
        fill(0);
        textSize(32);
        text(`X ${amount}`, this.x + this.x, this.y + this.y);
    }
}