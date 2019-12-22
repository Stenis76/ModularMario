class Builder {
    public currentAsset: string = 'none';
    private level:{
        levelObjects: Array<LevelObject>;
        levelAssets: Array<LevelObject>;
      };

    public constructor(level: {
        levelObjects: Array<LevelObject>;
        levelAssets: Array<LevelObject>;
      }){
        this.level = level;
    }

    public mousePressed() {        
        if (mouseIsPressed) {
            if (mouseX > this.level.levelAssets[0].x &&
                mouseX < this.level.levelAssets[0].x + this.level.levelAssets[0].w &&
                mouseY > this.level.levelAssets[0].y && 
                mouseY < this.level.levelAssets[0].y + this.level.levelAssets[0].h) {                
                    this.currentAsset = 'ladder';
                    cursor(CROSS);                    
            }
    
            else if (this.currentAsset == 'ladder') {                           
                cursor(ARROW);
            }  
        }
         
    }

}
    