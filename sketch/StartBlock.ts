class StartBlock extends LevelObject {    
    
    public constructor(x: number, y: number, w: number, h: number) {
        super(x, y, w, h);        
    }
    
    public draw() {
        fill('red');
        rect(this.x, this.y, this.w, this.h);
    }
    public spawnPointX() {
        return this.x
    }
    public spawnPointY() {
        return this.y
    }
    public collide() {
    
        console.log(
          "Start Block" +
            "\n" +
            "X-position : " +
            this.x +
            "\n" +
            "Y-position : " +
            this.y
        );
      }
}