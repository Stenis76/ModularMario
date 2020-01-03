class Log extends LevelObject {
    private sidebar = new Sidebar();   
    public x: number;
    public y: number;
    public w: number;
    public h: number;

    constructor(x: number, y: number, w: number, h: number) {
        super(x, y, w, h);
        this.x = this.sidebar.w / 4;
        this.y = this.sidebar.h * 0.42;
        this.w = 60;
        this.h = 30;
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