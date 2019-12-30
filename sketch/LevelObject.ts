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
        noStroke();
        rect(this.x, this.y, this.w, this.h)
    }
}