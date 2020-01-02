class Log extends LevelObject {
    private sidebar = new Sidebar();   
    public x: number;
    public y: number;
    public w: number;
    public h: number;

    constructor(x: number, y: number, w: number, h: number) {
        super(x, y, w, h);
        this.x = this.sidebar.w / 3;
        this.y = this.sidebar.h * 0.4;
        this.w = 50;
        this.h = 25;
    }
    
    public draw() {
        image(logImage, this.x, this.y, this.w, this.h);  
    }

    public drawText(amount: number) {       
        fill(0);
        textSize(32);
        text(`X ${amount}`, this.x + this.w, this.y);        
    }
}