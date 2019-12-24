class LevelFactory {
<<<<<<< Updated upstream
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
=======
<<<<<<< Updated upstream
    public GA = new GameArea();   
    
    private levels: Array<{assets: Array<Number>, layout: Array<Array<Number>>}> = [
        {
            assets: [],
            layout:[
                [0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0],
                [0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0],
                [0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0],
                [0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0],
                [0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0],
                [0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0, 0, 0, 1, 0, 0, 0, 0 ,0 ,0, 3],
                [0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0, 0, 1, 0, 0, 0, 0, 0 ,1 ,0, 0],
                [0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0],
                [0, 0, 0, 0, 0, 0, 0 ,0 ,1, 0, 1, 0, 0, 0, 0, 1, 0 ,0 ,0, 0],
                [0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0],
                [0, 0, 0, 0, 0, 0, 0 ,0 ,1, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0],
                [0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0],
                [0, 0, 0, 0, 0, 0, 1 ,0 ,0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0],
                [0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0],
                [0, 0, 0, 0, 1, 0, 0 ,0 ,0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0],
                [4, 0, 1, 0, 0, 0, 0 ,0 ,0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0],
                [0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0],
                [2, 0, 0, 1, 0, 0, 0 ,0 ,0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0],
                [0, 1, 0, 0, 0, 0, 0 ,0 ,0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0],
                [0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]         
            ]
        }
    ]    
  
    public getLevel(currentLevel: number): any {
    
    let x = this.GA.x
    let y = this.GA.y
    let w = this.GA.w / 20
    let h = this.GA.h / 20
    const levelObjects: Array<LevelObject> = [];

        for (let i = 0; i < this.levels[currentLevel].layout.length; i++) {
            for (let j = 0; j < this.levels[currentLevel].layout[i].length; j++) {
                switch(this.levels[currentLevel].layout[i][j]) {                    
                    case 1:
                        let block = new Block(x, y, w ,h, false);
                        levelObjects.push(block);                                                                        
                        break;                        
                    case 2:
                        let startBlock = new StartBlock(x, y, w ,h);
                        levelObjects.push(startBlock); 
                        break;
                    case 3:
                        let finishBlock = new FinishBlock(x, y, w ,h);
                        levelObjects.push(finishBlock); 
                        break;
                    case 4:
                        let character = new Character(x, y, w ,h);
                        levelObjects.push(character);                                                                        
                        break;
                }
                x += w  
            }
            x = this.GA.x
            y += h    
        }  
        return new Level(levelObjects);                         
    }    
}
=======
  public GA = new GameArea();

  private levels: Array<{
    assets: Array<Number>;
    layout: Array<Array<Number>>;
  }> = [
    {
      assets: [],
      layout: [
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
          case 0: {
            let emptySpace = new EmptySpace(x,y,w,h)
            levelObjects.push(emptySpace);
            break;
          }
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
          case 4:
            let character = new Character(x, y, w, h);
            levelObjects.push(character);
            break;
        }
        x += w;
      }
      x = this.GA.x;
      y += h;
=======
          // case 4:  
          //   let character = new Character(x, y, w, h);
          //   levelObjects.push(character);
          //   break;
        }
        x += cellUnit;
      }
      x = this.GA.x;
      y += cellUnit;
>>>>>>> Stashed changes
    }
    return new Level(levelObjects);
  }
}
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
