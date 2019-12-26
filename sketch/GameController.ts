class GameController {
    private currentLevel: number = 0;   //Keep track of currentLevel
    public inBuildPhase: boolean = false;   //Activated when in building phase  
    
    private levelFactory = new LevelFactory();
    public level: Level = this.levelFactory.getLevel(this.currentLevel); //Save array of level objects in level variable

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
        let ladders: Array<LevelObject> = [];
        let logs: Array<LevelObject> = [];
        let stones: Array<LevelObject> = [];

        for(let i = 0; i < this.level.levelAssets.length; i++) {            
            switch (this.level.levelAssets[i].constructor) {
                case Ladder:
                    ladders.push(this.level.levelAssets[i]);
                    break;
                case Log:
                    logs.push(this.level.levelAssets[i]);                    
                    break;
                case Stone:
                    stones.push(this.level.levelAssets[i]);
                    break;
            }  
            this.level.levelAssets[i].draw();           
        }

        for (let i = 0; i < ladders.length; i++) {
            if (i == ladders.length - 1) {
                ladders[i].drawText(ladders.length);
            }
        }
        for (let i = 0; i < logs.length; i++) {
            if (i == logs.length - 1) {
                logs[i].drawText(logs.length);
            }
        }
        for (let i = 0; i < stones.length; i++) {
            if (i == stones.length - 1) {
                stones[i].drawText(stones.length);
            }
        }
    }

    public changeGamePhase() {
        if (this.inBuildPhase == false) {
            this.inBuildPhase = true;
        } else {
            this.inBuildPhase = false;
        }
    }

    public buildPhase() { 
        let builder = new Builder(this.level, this.inBuildPhase);      
        builder.inBuildMode();
    }

    //Keep track of player versus all collidable objects
    public collisionDetection(character: Character) {        
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