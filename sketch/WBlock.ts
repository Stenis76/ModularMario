class Block extends LevelObject {
    protected deadly: boolean;
    
    public constructor(x: number, y: number, w: number, h: number, deadly: boolean) {
        super(x, y, w, h);
        this.deadly = deadly;
    }
    
    public draw() {
        fill('white');
        image(blockImage, this.x, this.y, this.w, this.h);
    }
}