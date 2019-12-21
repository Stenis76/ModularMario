class LevelFactory {
  public GA = new GameArea();

  private levels: Array<{
    assets: Array<Number>;
    layout: Array<Array<Number>>;
  }> = [
    {
      assets: [],
      layout: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ]
    }
  ];

  public getLevel(currentLevel: number): any {
    let cellUnit = Math.round(this.GA.w / this.levels[currentLevel].layout.length);
    let x = this.GA.x;
    let y = this.GA.y;
    let w = cellUnit;
    let h = cellUnit;
    const levelObjects: Array<LevelObject> = [];

    for (let i = 0; i < this.levels[currentLevel].layout.length; i++) {
      for (let j = 0; j < this.levels[currentLevel].layout[i].length; j++) {
        switch (this.levels[currentLevel].layout[i][j]) {
          case 1:
            let block = new Block(x, y, w, h, false);
            levelObjects.push(block);
            break;
          case 2:
            let startBlock = new StartBlock(x, y, w, h);
            levelObjects.push(startBlock);
            break;
          case 3:
            let finishBlock = new FinishBlock(x, y, w, h);
            levelObjects.push(finishBlock);
            break;
          case 4:
            let character = new Character(x, y, w, h);
            levelObjects.push(character);
            break;
        }
        x += w;
      }
      x = this.GA.x;
      y += h;
    }

    let ladderCount: number = 0;
    let ladderPresent: boolean = false;
    let logCount: number = 0;
    let logPresent: boolean = false;
    let stoneCount: number = 0;
    let stonePresent: boolean = false;

    for(let i = 0; i < this.levels[currentLevel].assets.length; i++) {
        switch (this.levels[currentLevel].assets[i]) {
            case 1:
                ladderCount++;
                ladderPresent = true;                
                break;                
            case 2:
                logCount++;
                logPresent = true;                
                break;                
            case 3:
                stoneCount++;
                stonePresent = true;                
                break;                
        }
    }

    if(ladderPresent) {
        let ladder = new Ladder(x, y, w, h, `X ${ladderCount}`)
        levelObjects.push(ladder);
    }
    if(logPresent) {
        let log = new Log(x, y, w, h, `X ${logCount}`)
        levelObjects.push(log);
    }
    if(stonePresent) {
        let stone = new Stone(x, y, w, h, `X ${stoneCount}`)
        levelObjects.push(stone);
    }

    return new Level(levelObjects);
  }
}
