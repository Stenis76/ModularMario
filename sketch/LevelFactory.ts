class LevelFactory {
    private levels: Array<Array<Number>> = [
        [1, 2, 3, 4, 1, 1, 1],
        [1, 3, 3, 3, 4]
    ];
       

    public getLevel(currentLevel: number): Level {

        const level = this.levels;
        const listOfLevelObjects: Array<LevelObject> = [];
        for(let i = 0; i < level[currentLevel].length; i++){            
                switch (level[currentLevel][i]) {
                    case 1:
                    listOfLevelObjects.push(new Block(20, 20, 20, 20, false));
                    break;
            }
        }
        return new Level(listOfLevelObjects);        
    }
}