class GameController {
    private currentLevel: number = 0;
    levelFactory = new LevelFactory();
    level: Level = this.levelFactory.getLevel(this.currentLevel);

    public drawGameArea() {
        let gameArea = new GameArea();
        gameArea.draw();
    }

    public drawLevel() {        
        let char: number = 0;
        
        for(let i = 0; i < this.level.levelObjects.length; i++){
            this.level.levelObjects[i].draw();
            
            if (this.level.levelObjects[i].constructor == Character) {                
                char = i;
            } 
        }         
        return this.level.levelObjects[char];       
    }

    collisionDetection(character: Character) {        
        let collideBlocks: Array<LevelObject> = [];     

        for(let i = 0; i < this.level.levelObjects.length; i++) {
            if (this.level.levelObjects[i].constructor == Block){
                collideBlocks.push(this.level.levelObjects[i]);
            }
        }

        // console.log(collideBlocks)
        // console.log(character.y)
        // console.log(character.h)
        // console.log(collideBlocks[23].y)
        
        for(let i = 0; i < collideBlocks.length; i++){
            //let d = dist(character.x, character.y, collideBlocks[i].x, collideBlocks[i].y);
            if (character.x < collideBlocks[i].x + collideBlocks[i].w &&
                character.x + character.w > collideBlocks[i].x &&
                character.y < collideBlocks[i].y// + collideBlocks[i].h 
                &&
                character.y + character.h > collideBlocks[i].y) {
                    
                    character.y = collideBlocks[i].y - character.h;
                    character.vy = 0;                     
             }
             //console.log(character.y)
            
        }
    }
}