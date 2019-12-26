class Builder {
    public currentAsset: string = 'none';
    private gameArea = new GameArea();
    
    private level:{
        levelObjects: Array<LevelObject>;
        levelAssets: Array<LevelObject>;
    };
    private phase: boolean;

    public constructor(level: {
    levelObjects: Array<LevelObject>;
    levelAssets: Array<LevelObject>;
    }, phase: boolean){
        this.level = level;
        this.phase = phase;
    }

    public inBuildMode() {
        let cellUnit = this.gameArea.w / 20;
        let x = this.gameArea.x;
        let y = this.gameArea.y;
        let w = cellUnit;
        let h = cellUnit;

        if (this.phase) {
            cursor(CROSS);
            for (let i = 0; i < 20; i++) {
                for (let j = 0; j < 20; j++) {
                    fill(0, 0, 0, 0);
                    stroke(0);
                    rect(x, y, w, h);
                    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
                        image(ladderImage, x, y, w, h);                        
                    }
                    x += w;
                }
                x = this.gameArea.x;
                y += h;
            }
        } else {
            cursor(ARROW);
        }
    }

    public handleMouseEvents() {
        if (mouseX > this.level.levelAssets[0].x &&
            mouseX < this.level.levelAssets[0].x + this.level.levelAssets[0].w &&
            mouseY > this.level.levelAssets[0].y && 
            mouseY < this.level.levelAssets[0].y + this.level.levelAssets[0].h) {                
                this.currentAsset = 'ladder';
                cursor(CROSS);                                       
        } else if (this.currentAsset == 'ladder') {                           
            cursor(ARROW);
        }
    }
}
    