class GameController {

  private sidebar = new Sidebar();
  private sidebarright = new Sidebarright();
  private gameArea = new GameArea();
  public inBuildPhase: boolean = true;
  public ladders: Array<LevelObject> = [];
  public logs: Array<LevelObject> = [];
  public stones: Array<LevelObject>= [];
  private time: number = 0; 
  private timer: number = 0;  
  
  private levelFactory = new LevelFactory();
  private level: Level = this.levelFactory.getLevel(currentLevel);

  private latestScore1: number = JSON.parse(localStorage.getItem('level1ls') || '0');
  private highScore1: number = JSON.parse(localStorage.getItem('level1hs') || '0');
  private latestScore2: number = JSON.parse(localStorage.getItem('level2ls') || '0');
  private highScore2: number = JSON.parse(localStorage.getItem('level2hs') || '0');
  private latestScore3: number = JSON.parse(localStorage.getItem('level3ls') || '0');
  private highScore3: number = JSON.parse(localStorage.getItem('level3hs') || '0');
  private latestScore4: number = JSON.parse(localStorage.getItem('level4ls') || '0');
  private highScore4: number = JSON.parse(localStorage.getItem('level4hs') || '0');

  public laddersLeft: Array<LevelObject> = [];
  public logsLeft: Array<LevelObject> = [];
  public stonesLeft: Array<LevelObject> = [];
  public spawnPoint: {
    posX: number;
    posY: number;
    cellUnit: number;
  } = {
    posX: 0,
    posY: 0,
    cellUnit: 0
};

  //Draw the gameArea
  public drawGameArea() {
    this.gameArea.draw();
  }

  //Loop list of level objects and draw them
  public drawLevel() {

    for (let i = 0; i < this.level.levelObjects.length; i++) {
      this.level.levelObjects[i].draw();

      if (this.level.levelObjects[i].constructor === StartBlock) {
        this.spawnPoint = {
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
      if (this.level.levelObjects[i].constructor === KillBlock && player) {
        this.level.levelObjects[i].collide();
      }
    }
    return this.spawnPoint;
  }

  public spawnPlayer() {
    this.spawnPoint = this.drawLevel();
    player = new Character(
      this.spawnPoint.posX,
      this.spawnPoint.posY,
      this.spawnPoint.cellUnit
    )
    return player;
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
                    this.level.levelAssets[i].collide();                                    
                    break;
                case Log:
                    this.logs.push(this.level.levelAssets[i]);
                    if (this.level.levelAssets[i].x < this.sidebar.w){
                        this.logsLeft.push(this.level.levelAssets[i]);
                    }        
                    this.level.levelAssets[i].collide();                
                    break;
                case Stone:
                    this.stones.push(this.level.levelAssets[i]);
                    if (this.level.levelAssets[i].x < this.sidebar.w){
                        this.stonesLeft.push(this.level.levelAssets[i]);
                    }
                    this.level.levelAssets[i].collide(); 
                    break;
            }  
            this.level.levelAssets[i].draw();           
        }
    }

    //Draw the Sidebar
    public drawSidebar() {  
        this.sidebar.draw(this.laddersLeft, this.logsLeft, this.stonesLeft); 
        let score = new Score(this.time, this.laddersLeft.length, this.logsLeft.length, this.stonesLeft.length);
        score.getScore();          
    }

    public drawSidebarright(){
      this.sidebarright.draw();
    }

    public win() {
      noLoop()
      mySong.stop()
      winSound.play()
      clearInterval(this.timer);
      this.timer = 0;
      let score = new Score(this.time, this.laddersLeft.length, this.logsLeft.length, this.stonesLeft.length);
      let scorescreen = new Scorescreen(score.getScore());
      scorescreen.draw();
      phase = false;

      if (currentLevel == 0) {
        this.latestScore1 = score.getScore();
        localStorage.setItem("level1ls",JSON.stringify(this.latestScore1));
      if (this.latestScore1 > this.highScore1 || this.highScore1 == 0) {
        this.highScore1 = this.latestScore1;
        localStorage.setItem("level1hs",JSON.stringify(this.highScore1));
        }
      }
      if (currentLevel == 1) {
        this.latestScore2 = score.getScore();
        localStorage.setItem("level2ls",JSON.stringify(this.latestScore2));
      if (this.latestScore2 > this.highScore2 || this.highScore2 == 0) {
        this.highScore2 = this.latestScore2;
        localStorage.setItem("level2hs",JSON.stringify(this.highScore2));
       }
      } 
      if (currentLevel == 2) {
        this.latestScore3 = score.getScore();
        localStorage.setItem("level3ls",JSON.stringify(this.latestScore3));
      if (this.latestScore3 > this.highScore3 || this.highScore3 == 0) {
        this.highScore3 = this.latestScore3;
        localStorage.setItem("level3hs",JSON.stringify(this.highScore3));
       }
      } 
      if (currentLevel == 3) {
        this.latestScore4 = score.getScore();
        localStorage.setItem("level4ls",JSON.stringify(this.latestScore4));
      if (this.latestScore4 > this.highScore4 || this.highScore4 == 0) {
        this.highScore4 = this.latestScore4;
        localStorage.setItem("level4hs",JSON.stringify(this.highScore4));
       }
      } 
      if (mouseIsPressed) {
        loop()
      }
      
    }

    //Go into buildphase
    public changeGamePhase() {
      
        if (this.inBuildPhase === true) { 
          buildMusic.stop()
          mySong.play();
          this.inBuildPhase = false;
          phase = true;
          this.timer = setInterval(() => { this.time++ }, 1000);
        } else if (this.inBuildPhase === false) {            
          clearInterval(this.timer);
          this.timer = 0;
          mySong.stop();
          buildMusic.setVolume(0.5);
          buildMusic.play();
          this.inBuildPhase = true;
          phase = false;            
      }
    }

    public levelSelect() {
      fill('black');
      rect(windowWidth, windowHeight, 0, 0);
      stroke('red');
      rect(windowWidth / 2 - 350, windowHeight / 2, 100, 100);       
      rect(windowWidth / 2 - 200, windowHeight / 2, 100, 100);
      rect(windowWidth / 2 - 50, windowHeight / 2, 100, 100);
      rect(windowWidth / 2 + 100, windowHeight / 2, 100, 100);
      rect(windowWidth / 2 + 250, windowHeight / 2, 100, 100);
      fill('red');
      textSize(20);
      textFont(gameFont);
      text('Level 1', windowWidth / 2 - 300, windowHeight / 2 - 5);
      text('Level 2', windowWidth / 2 - 150, windowHeight / 2 - 5);      
      text('Level 3', windowWidth / 2, windowHeight / 2- 5);
      text('Level 4', windowWidth / 2 + 150, windowHeight / 2- 5);

      if (isNaN(this.highScore1)){
        text(`Highscore: 0`, windowWidth / 2 - 300, windowHeight / 2 + 120);
      } else {
        text(`Highscore: ${this.highScore1}`, windowWidth / 2 - 300, windowHeight / 2 + 120);
      }
      if (isNaN(this.highScore2)){
        text(`Highscore: 0`, windowWidth / 2 - 150, windowHeight / 2 + 120);
      } else {
        text(`Highscore: ${this.highScore2}`, windowWidth / 2 - 150, windowHeight / 2 + 120);
      }
      if (isNaN(this.highScore3)){
        text(`Highscore: 0`, windowWidth / 2, windowHeight / 2 + 120);
      } else {
        text(`Highscore: ${this.highScore3}`, windowWidth / 2, windowHeight / 2 + 120);
      }
      if (isNaN(this.highScore4)){
        text(`Highscore: 0`, windowWidth / 2 + 150, windowHeight / 2 + 120);
      } else {
        text(`Highscore: ${this.highScore4}`, windowWidth / 2 + 150, windowHeight / 2 + 120);
      }

      text(`Latest score: ${this.latestScore1}`, windowWidth / 2 - 300, windowHeight / 2 + 140);
      text(`Latest score: ${this.latestScore2}`, windowWidth / 2 - 150, windowHeight / 2 + 140);
      text(`Latest score: ${this.latestScore3}`, windowWidth / 2, windowHeight / 2 + 140);
      text(`Latest score: ${this.latestScore4}`, windowWidth / 2 + 150, windowHeight / 2 + 140);
      text('Comming soon', windowWidth / 2 + 300, windowHeight / 2- 5); 
      noStroke();      
    }

    //When in buildphase, let builder class handle drawing of assets to gameArea
    public buildPhase(assetNumber: number) {
        if (this.inBuildPhase) {
            let builder = new Builder(this.inBuildPhase);      
            builder.inBuildMode(assetNumber, this.ladders, this.logs, this.stones);
            if (assetNumber === 4) {
              builder.resetLevel();
            }
        }
    } 

}