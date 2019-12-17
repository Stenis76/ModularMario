class Level {
    private listOfLevelObjects: Array<LevelObject> = [];

    public constructor(listOfLevelObjects: Array<LevelObject>) {
        this.listOfLevelObjects = listOfLevelObjects;
    }

    public draw() {
        for(let i = 0; i < this.listOfLevelObjects.length; i++) {
            console.log('hej');
        }
    }
}