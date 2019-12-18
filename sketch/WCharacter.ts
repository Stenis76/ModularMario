class Character extends LevelObject {   
    
    private GA = new GameArea();
    public vy: number;
    private gravity: number;

    public constructor(x: number, y: number, w: number, h: number){
        super(x, y, w, h); 
        this.vy = 0;
        this.gravity = 1;       
    }

    public jump() {
        this.vy = -15;
    }

    public update() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, this.GA.h - this.h); 
    }

    public run() {      
        if (keyIsDown(65)) {
            this.x -= 5;
        }

        if (keyIsDown(68)) {
            this.x += 5;           
        }

        if (this.x < this.GA.x){
            this.x = this.GA.x;
        } else if (this.x > this.GA.x + this.GA.w - this.w){
            this.x = this.GA.x + this.GA.w - this.w;
        }
    }

    public show() {
        fill(180,20,255);
        rect(this.x, this.y, this.w, this.h);        
    }     
}

 