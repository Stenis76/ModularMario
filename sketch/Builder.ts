class Builder {
    public currentAsset: string = 'none';
    private gameArea = new GameArea();    
       
    private phase: boolean;


    public constructor(phase: boolean){
        this.phase = phase;
    }

    public inBuildMode(assetNumber: number, ladders: Array<LevelObject>, logs: Array<LevelObject>, stones: Array<LevelObject>) {
        let cellUnit: number = this.gameArea.w / 20;
        let x: number = this.gameArea.x;
        let y: number = this.gameArea.y;
        let w: number = cellUnit;
        let h: number = cellUnit;        

        if (this.phase) {
            for (let i = 0; i < 20; i++) {
                for (let j = 0; j < 20; j++) {
                    fill(0, 0, 0, 0);
                    stroke(0);
                    rect(x, y, w, h); 
                        
                    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
                        if (assetNumber == 1) {                            
                            image(ladderImage, x, y, w, h * 2);
                            if (mouseIsPressed) {                               
                                ladders[ladderNbr].x = x;
                                ladders[ladderNbr].y = y;                                               
                                ladders[ladderNbr].w = w;
                                ladders[ladderNbr].h = h * 2;
                            }                                                                         
                        }                                               
                        if (assetNumber == 2) {                            
                            image(logImage, x, y, w * 2, h);
                            if (mouseIsPressed) {                               
                                logs[logNbr].x = x;
                                logs[logNbr].y = y;                                               
                                logs[logNbr].w = w * 2;
                                logs[logNbr].h = h;
                            }                                                                         
                        }                                               
                        if (assetNumber == 3) {                            
                            image(stoneImage, x, y, w, h);
                            if (mouseIsPressed) {                               
                                stones[stoneNbr].x = x;
                                stones[stoneNbr].y = y;                                               
                                stones[stoneNbr].w = w;
                                stones[stoneNbr].h = h;
                            }                                                                         
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
