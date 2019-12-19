class GameController {
  splashScreen = new SplashScreen(windowWidth, windowHeight, 0, 0);
  private currentLevel: number = 0; //Keep track of currentLevel
  levelFactory = new LevelFactory();
  level: Level = this.levelFactory.getLevel(this.currentLevel); //Save array of level objects in level variable
  //Draw the gameArea
  public drawGameArea() {
    let gameArea = new GameArea();
    gameArea.draw();
  }

  //Loop list of level objects and draw them
  public drawLevel() {
    let char: number = 0;

    for (let i = 0; i < this.level.levelObjects.length; i++) {
      this.level.levelObjects[i].draw();

      if (this.level.levelObjects[i].constructor == Character) {
        char = i;
      }
    }
    return this.level.levelObjects[char]; //Return the Character object
  }

  //Keep track of player versus all collidable objects
  collisionDetection(character: Character) {
    let collideBlocks: Array<LevelObject> = [];

    //Loop through all objects and save the collideable ones in new array
    for (let i = 0; i < this.level.levelObjects.length; i++) {
      if (this.level.levelObjects[i].constructor == Block) {
        collideBlocks.push(this.level.levelObjects[i]);
      }
    }

    //Determina what collision is and what should happen when collision occur
    for (let i = 0; i < collideBlocks.length; i++) {
      //let d = dist(character.x, character.y, collideBlocks[i].x, collideBlocks[i].y);
      if (
        character.x < collideBlocks[i].x + collideBlocks[i].w &&
        character.x + character.w > collideBlocks[i].x &&
        character.y < collideBlocks[i].y + collideBlocks[i].h &&
        character.y + character.h > collideBlocks[i].y
      ) {
        character.y = collideBlocks[i].y - character.h;
        character.vy = 0;
      }
    }
  }
}
