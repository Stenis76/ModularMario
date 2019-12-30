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
    let collidable: Array<object> = [];

    for (let i = 0; i < this.level.levelObjects.length; i++) {
      this.level.levelObjects[i].draw();

      if (this.level.levelObjects[i].constructor === StartBlock) {
        spawnPoint = {
          posX: this.level.levelObjects[i].x,
          posY: this.level.levelObjects[i].y,
          cellUnit: this.level.levelObjects[i].w
        };
      }
      if (this.level.levelObjects[i].constructor === Block) {
        collidable.push(this.level.levelObjects[i]);
      }
    }

    return spawnPoint; //return the point where the character shall be placed
  }

  /*
  //Keep track of player versus all collidable objects
  public collisionDetection(character: Character) {
    let collideBlocks: Array<LevelObject> = [];

    //Loop through all objects and save the collideable ones in new array
    for (let i = 0; i < this.level.levelObjects.length; i++) {
      if (this.level.levelObjects[i].constructor == Block) {
        collideBlocks.push(this.level.levelObjects[i]);
      }
    }

    //Determine what collision is and what should happen when collision occurs
    for (let i = 0; i < collideBlocks.length; i++) {
      for (let i = 0; i < collideBlocks.length; i++) {
        let block = {
          top: collideBlocks[i].y,
          bottom: collideBlocks[i].y + collideBlocks[i].h,
          left: collideBlocks[i].x,
          right: collideBlocks[i].x + collideBlocks[i].w,
  
          width: collideBlocks[i].w,
          height: collideBlocks[i].h
        };
        let char = {
          top: character.y,
          bottom: character.y + character.h,
          left: character.x,
          right: character.x + character.w,
  
          width: character.w,
          height: character.h
        };
  
        // check collision
        
        if (
          char.bottom > block.top &&
          char.top < block.bottom &&
          char.left < block.right &&
          char.right > block.left
        ) {
          //collision is true, check what sort of collision
  
          if (char.bottom > block.top && char.top < block.top) {
            console.log("Standing on block");
            // character.y = block.top - char.height;
            character.vy = 0;
          }
          if (char.top < block.bottom && char.bottom > block.bottom) {
            character.y = block.bottom;
            character.vy = 0;
            console.log("hit head");
          }
          if (char.right > block.left && char.left < block.left) {
            console.log("touch left side of block");
            character.x = block.left - char.width;
          }
          if (char.left < block.right && char.right > block.right) {
            console.log("touch right side of block");
            character.x = block.right;
          }
        }
    }
  }
  */
}
