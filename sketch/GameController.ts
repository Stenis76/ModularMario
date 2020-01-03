class GameController {
  private currentLevel: number = 0; //Keep track of currentLevel
  levelFactory = new LevelFactory();
  level: Level = this.levelFactory.getLevel(this.currentLevel); //Save array of level objects in level variable
  
    public splashScreen = new SplashScreen(windowWidth, windowHeight, 0, 0);
    private gameArea = new GameArea();
    private sidebar = new Sidebar();
    public inBuildPhase: boolean = false; //Activated when in building phase 
    public ladders: Array<LevelObject> = [];
    public logs: Array<LevelObject> = [];
    public stones: Array<LevelObject>= [];  
    private currentLevel: number = 0; //Keep track of currentLevel
    private levelFactory = new LevelFactory();
    private level: Level = this.levelFactory.getLevel(this.currentLevel); //Save array of level objects in level variable
    public laddersLeft: Array<LevelObject> = [];
    public logsLeft: Array<LevelObject> = [];
    public stonesLeft: Array<LevelObject> = [];

  //Draw the gameArea
  public drawGameArea() {
    let gameArea = new GameArea();
    gameArea.draw();
  }

  //Loop list of level objects and draw them
  public drawLevel() {
    let spawnPoint: object = {};

    for (let i = 0; i < this.level.levelObjects.length; i++) {
      this.level.levelObjects[i].draw();

      if (this.level.levelObjects[i].constructor === StartBlock) {
        spawnPoint = {
          posX: this.level.levelObjects[i].x,
          posY: this.level.levelObjects[i].y,
          cellUnit: this.level.levelObjects[i].w
        };
      }
      if (this.level.levelObjects[i].constructor === Block && player) {
        this.level.levelObjects[i].collide();
      }
      if (this.level.levelObjects[i].constructor === FinishBlock && player) {
        this.level.levelObjects[i].collide();
      }
    }
    return spawnPoint; //return the point where the character shall be placed
  }

  public spawnPlayer() {
    spawnPoint = this.drawLevel();
    player = new Character(
      spawnPoint.posX,
      spawnPoint.posY,
      spawnPoint.cellUnit
    );

    return player;
  }
}

  
    //Draw the gameArea
    public drawGameArea() {    
    this.gameArea.draw();
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
        this.ladders = [];
        this.logs = [];
        this.stones = [];  
        this.laddersLeft = [];
        this.logsLeft = [];
        this.stonesLeft = [];

        //Divide Ladders Logs and Stones in to different arrays
        for(let i = 0; i < this.level.levelAssets.length; i++) {            
            switch (this.level.levelAssets[i].constructor) {
                case Ladder:
                    this.ladders.push(this.level.levelAssets[i]);
                    if (this.level.levelAssets[i].x < this.sidebar.w){
                        this.laddersLeft.push(this.level.levelAssets[i]);
                    }                                       
                    break;
                case Log:
                    this.logs.push(this.level.levelAssets[i]);
                    if (this.level.levelAssets[i].x < this.sidebar.w){
                        this.logsLeft.push(this.level.levelAssets[i]);
                    }                       
                    break;
                case Stone:
                    this.stones.push(this.level.levelAssets[i]);
                    if (this.level.levelAssets[i].x < this.sidebar.w){
                        this.stonesLeft.push(this.level.levelAssets[i]);
                    }
                    break;
            }  
            this.level.levelAssets[i].draw();           
        }
    }

        //Draw the Sidebar
    public drawSidebar() {  
        this.sidebar.draw(this.currentLevel, this.laddersLeft, this.logsLeft, this.stonesLeft);     
    }

    //Go into buildphase
    public changeGamePhase() {
        if (this.inBuildPhase == false) {
            this.inBuildPhase = true;
        } else {
            this.inBuildPhase = false;
        }
    }

    //When in buildphase, let builder class handle drawing of assets to gameArea
    public buildPhase(assetNumber: number) {
        if (this.inBuildPhase) {
            let builder = new Builder(this.inBuildPhase);      
            builder.inBuildMode(assetNumber, this.ladders, this.logs, this.stones);
        }
    }

    }
  }
