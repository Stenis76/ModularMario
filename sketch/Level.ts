class Level {
    public levelObjects: Array<LevelObject> = [];
    public levelAssets: Array<LevelObject> = [];

    public constructor(levelObjects: Array<LevelObject>, levelAssets: Array<LevelObject>) {
        this.levelObjects = levelObjects;
        this.levelAssets = levelAssets;
    }    
}