class LevelObject {    
    protected x: number;
    protected y: number;
    protected w: number;
    protected h: number;

    protected constructor(x: number, y: number, w: number, h: number) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    public draw() {
        fill(100, 0, 255);
        rect(this.x, this.y, this.w, this.h)
    }
}