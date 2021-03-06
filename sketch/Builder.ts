class Builder {
  public currentAsset: string = "none";
  private gameArea = new GameArea();
  private sidebar = new Sidebar();
  private phase: boolean;

  public constructor(phase: boolean) {
    this.phase = phase;
  }


  public inBuildMode(assetNumber: number, ladders: Array<LevelObject>, logs: Array<LevelObject>, stones: Array<LevelObject>) {
        let cellUnit: number = this.gameArea.w / 20;
        let x: number = this.gameArea.x;
        let y: number = this.gameArea.y;
        let w: number = cellUnit;
        let h: number = cellUnit;
     
    //Måla ut rutnät    
    if (this.phase) {
      for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
          fill(0, 0, 0, 0);
          stroke(0);
          rect(x, y, w, h);

          if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
            if (assetNumber == 1) {
              image(ladderImage, x, y, w, h * 3); //Måla stege som följer musen
              if (mouseIsPressed) {
                insertSound.play();
                ladders[ladderNbr].x = x; //Placera ut stege på spelplanen
                ladders[ladderNbr].y = y;
                ladders[ladderNbr].w = w;
                ladders[ladderNbr].h = h * 3;
                drawedAssets.push(ladders[ladderNbr]);
              }
            }
            if (assetNumber == 2) {
              image(logImage, x, y, w * 3, h);  //Måla log som följer musen
              if (mouseIsPressed) {
                insertSound.play();
                logs[logNbr].x = x;
                logs[logNbr].y = y;
                logs[logNbr].w = w * 3;
                logs[logNbr].h = h; //Placera ut log på spelplanen
                drawedAssets.push(logs[logNbr]);
              }
            }
            if (assetNumber == 3) {
              image(stoneImage, x, y, w, h);  //Måla stone som följer musen
              if (mouseIsPressed) {
                insertSound.play();
                stones[stoneNbr].x = x;
                stones[stoneNbr].y = y;
                stones[stoneNbr].w = w;
                stones[stoneNbr].h = h; //Placera ut stone på spelplanen
                drawedAssets.push(stones[stoneNbr]);
              }
            }
          }
          x += w;
        }
        x = this.gameArea.x;
        y += h;
      }
    }
  }

  //Loopa igenom de utplacerade hjälpmedlen och återställ deras position till sidebar
  public resetLevel() {
    for (let i = 0; i < drawedAssets.length; i++) {
      if (drawedAssets[i].constructor === Ladder) {
        drawedAssets[i].x = this.sidebar.w / 3;
        drawedAssets[i].y = this.sidebar.h * 0.2;
        drawedAssets[i].w = 30;
        drawedAssets[i].h = 60;
      }
      if (drawedAssets[i].constructor === Log) {
        drawedAssets[i].x = this.sidebar.w / 4;
        drawedAssets[i].y = this.sidebar.h * 0.42;
        drawedAssets[i].w = 60;
        drawedAssets[i].h = 30;
      }
      if (drawedAssets[i].constructor === Stone) {
        drawedAssets[i].x = this.sidebar.w / 3;
        drawedAssets[i].y = this.sidebar.h * 0.62;
        drawedAssets[i].w = 30;
        drawedAssets[i].h = 30;
      }
    }
    gameController.spawnPlayer();
    drawedAssets = [];
    ladderNbr = -1;
    logNbr = -1;
    stoneNbr = -1;
  }
}
