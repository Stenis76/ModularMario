class Block extends LevelObject {
    protected deadly: boolean;
    
    public constructor(x: number, y: number, w: number, h: number, deadly: boolean) {
        super(x, y, w, h);
        this.deadly = deadly;
    }    
}