class GameController {
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
      // this.level.levelObjects[i].collide();

      if (this.level.levelObjects[i].constructor === Character) {
        char = i;
      }
    }
    return this.level.levelObjects[char]; //Return the Character object
  }

  //Keep track of player versus all collidable objects
  public collisionDetection() {
    let collideBlocks: Array<LevelObject> = [];

    //Loop through all objects and save the collideable ones in new array
    for (let i = 0; i < this.level.levelObjects.length; i++) {
      if (this.level.levelObjects[i].constructor == Block) {
        collideBlocks.push(this.level.levelObjects[i]);
      }
    }

    //Determine what collision is and what should happen when collision occurs
    for (let i = 0; i < collideBlocks.length; i++) {
    }
  }
}
