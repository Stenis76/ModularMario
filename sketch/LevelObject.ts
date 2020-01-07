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
        fill(255, 0, 0);
        stroke(0, 0, 0, 0);
        rect(this.x, this.y, this.w, this.h)
    }

    public collide() {
        console.log('no block detected')
    }
}