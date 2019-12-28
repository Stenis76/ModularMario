class GameController {
    private currentLevel: number = 0;   //Keep track of currentLevel
    private levelFactory = new LevelFactory();
    public level: Level = this.levelFactory.getLevel(this.currentLevel); //Save array of level objects in level variable
    private builder = new Builder(this.level);
    private sidebar = new Sidebar();
    private gameArea = new GameArea();
    
    public drawGameArea() { //Draw the GameArea
        this.gameArea.draw();
    }
        
    public drawSidebar() {  //Draw the Sidebar
        this.sidebar.draw(this.currentLevel);        
    }

    //Loop list of level objects and draw them
    public drawLevel() {        
        let char: number = 0;        
        
        for(let i = 0; i < this.level.levelObjects.length; i++){
            this.level.levelObjects[i].draw();
            
            if (this.level.levelObjects[i].constructor == Character) {                
                char = i;
            } 
        }         
        return this.level.levelObjects[char];   //Return the Character object    
    }

    //Loop list of level assets and draw them
    public drawAssets() {
        for(let i = 0; i < this.level.levelAssets.length; i++) {
            this.level.levelAssets[i].draw();
        }
    }

    public buildPhase() {
        this.builder.mousePressed();
    }

    //Keep track of player versus all collidable objects
    collisionDetection(character: Character) {        
        let collideBlocks: Array<LevelObject> = []; 

        //Loop through all objects and save the collideable ones in new array
        for(let i = 0; i < this.level.levelObjects.length; i++) {
            if (this.level.levelObjects[i].constructor == Block){
                collideBlocks.push(this.level.levelObjects[i]);
            }
        }
        
        //Determine what collision is and what should happen when collision occur
        for(let i = 0; i < collideBlocks.length; i++){
            //let d = dist(character.x, character.y, collideBlocks[i].x, collideBlocks[i].y);
            if (character.x < collideBlocks[i].x + collideBlocks[i].w &&
                character.x + character.w > collideBlocks[i].x &&
                character.y < collideBlocks[i].y + collideBlocks[i].h 
                &&
                character.y + character.h > collideBlocks[i].y) {
                    
                    character.y = collideBlocks[i].y - character.h;
                    character.vy = 0;                     
             } 
        }
    }
}