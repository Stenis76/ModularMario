class Ladder extends LevelObject {
    private sidebar = new Sidebar();   
    static x: number;
    public y: number;
    public w: number;
    public h: number;

    constructor(x: number, y: number, w: number, h: number) {
        super(x, y, w, h);
        this.x = this.sidebar.w / 3;
        this.y = this.sidebar.h * 0.2;
        this.w = 30;
        this.h = 60;
    }
    
    public draw() {        
        image(ladderImage, this.x, this.y, this.w, this.h);       
    }

    public collide() {
        console.log('ladder collide')
    }
}