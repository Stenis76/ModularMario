class Ladder extends LevelObject {
    private sidebar = new Sidebar();   
    static x: number;
    public y: number;
    public w: number;
    public h: number;
    public text: string;

    constructor(x: number, y: number, w: number, h: number, text: string) {
        super(x, y , w, h);
        this.x = this.sidebar.w / 3;
        this.y = this.sidebar.h * 0.2;
        this.w = 25;
        this.h = 50;
        this.text = text;
    }
    
    public draw() {
        fill(0);
        textSize(32);
        text(this.text, this.x + 50, this.y + 35);
        rect(this.x, this.y, this.w, this.h);
    }
}