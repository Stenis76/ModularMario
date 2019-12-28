class Builder {
    public currentAsset: string = 'none';
    private gameArea = new GameArea();
    
    
    private levelObjects: Array<LevelObject>;
    private ladders: Array<LevelObject>;
    private logs: Array<LevelObject>;
    private stones: Array<LevelObject>;    
    private phase: boolean;

    public constructor(levelObjects: Array<LevelObject>, ladders: Array<LevelObject>, logs: Array<LevelObject>, stones: Array<LevelObject>, phase: boolean){
        this.levelObjects = levelObjects;
        this.ladders = ladders;
        this.logs = logs;
        this.stones = stones;
        this.phase = phase;
    }

    public inBuildMode() {
        let cellUnit: number = this.gameArea.w / 20;
        let x: number = this.gameArea.x;
        let y: number = this.gameArea.y;
        let w: number = cellUnit;
        let h: number = cellUnit;
        let assetNumber;
        

        if (keyIsPressed) {
            if (keyCode === 49) {
                assetNumber = 1; 
                this.ladders[0].draw();//Skall deletas
            }
            if (keyCode === 50) {
                assetNumber = 2; 
                this.logs[0].draw() //Skall deletas
            }
            if (keyCode === 51) {
                this.stones[0].draw(); //Skall deletas
                assetNumber = 3; 
            }
            if (keyCode === 52) {
                console.log(this.levelObjects)
            }            
        }

        if (this.phase) {
            for (let i = 0; i < 20; i++) {
                for (let j = 0; j < 20; j++) {
                    fill(0, 0, 0, 0);
                    stroke(0);
                    rect(x, y, w, h); 
                        
                    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
                        if (assetNumber == 1){                            
                            image(ladderImage, x, y, w, h * 2);
                        } 
                        if (assetNumber == 2){ 
                            fill(0,255,0)                           
                            rect(x, y, w * 2, h);
                        }
                        if (assetNumber == 3){                            
                            fill(0,0,255)                           
                            rect(x, y, h, w);
                        }                       
                    }
                    x += w;
                }
                x = this.gameArea.x;
                y += h;
            }
        } 
    }    
}