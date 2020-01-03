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
