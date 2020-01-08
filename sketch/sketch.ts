let currentScreen: number = 0;
let splashScreen: any;
let currentLevel: number = 0;
let gameController: any;
let drawedAssets: Array<LevelObject> = [];
let player: any;
let spawnPoint: object;
let blockImage: p5.Image;
let finishImage: p5.Image;
let ladderImage: p5.Image;
let stoneImage: p5.Image;
let logImage: p5.Image;
let goldImage: p5.Image;
let silverImage: p5.Image;
let bronzeImage: p5.Image;
let backgroundImage: p5.Image;
let assetNumber: number;
let ladderNbr: number = -1;
let logNbr: number = -1;
let stoneNbr: number = -1;
let mySong: p5.SoundFile;
let jumpSound: p5.SoundFile;
let insertSound: p5.SoundFile;
let deathSound: p5.SoundFile;
let winSound: p5.SoundFile;
let buildMusic: p5.SoundFile;
let gameFont: p5.Font;

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  // Tyvärr har jag inte fått till den globala typningen för
  // inladdningen av ljud men fungerar bra enligt nedan..
  // sound = (window as any).loadSound('../assets/mySound.wav');

  blockImage = loadImage("./assets/images/dirtblock.png");
  finishImage = loadImage("./assets/images/cigarette.png");
  blockImage = loadImage("./assets/images/skullblock.png");
  finishImage = loadImage("./assets/images/cigarette.png");
  ladderImage = loadImage("./assets/images/ladder.png");
  logImage = loadImage("./assets/images/log.png");
  stoneImage = loadImage("./assets/images/stone.png");
  goldImage = loadImage("./assets/images/gold.png");
  silverImage = loadImage("./assets/images/silver.png");
  bronzeImage = loadImage("./assets/images/bronze.png");
  backgroundImage = loadImage("./assets/images/backgroundd.png");
  mySong = (window as any).loadSound("./assets/sound/smoke.mp3");
  jumpSound = (window as any).loadSound("./assets/sound/hopp.wav");
  insertSound = (window as any).loadSound("./assets/sound/insert.wav");
  deathSound = (window as any).loadSound("./assets/sound/deathsound.mp3");
  winSound = (window as any).loadSound("./assets/sound/win.wav");
  buildMusic = (window as any).loadSound("./assets/sound/buildermusic.mp3");
  gameFont = loadFont("assets/VT323.ttf");
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  fullscreen();
  splashScreen = new SplashScreen(windowWidth, windowHeight, 0, 0);
  gameController = new GameController();
  player = gameController.spawnPlayer();
}

/**
 * Built in draw function in P5
 * This is a good place to call public funcions of the object
 * you created in the setup function above
 */
function draw() {
  background(21);

  //StartScreen
  if (currentScreen == 0) {
    splashScreen.draw();
  }

  //LevelSelect
  if (currentScreen == 1) {
    gameController.levelSelect();
  }

  //Playable game
  if (currentScreen == 2) {
    background(200);
    gameController.drawGameArea();
    gameController.drawLevel();
    gameController.drawSidebar();
    gameController.drawAssets();
    player.show();
    player.run();
    player.update();
    gameController.buildPhase(assetNumber, ladderNbr);

    if (mouseIsPressed) {
      assetNumber = 0;
    }
  }
  if (currentScreen == 3) {
    gameController.win();
  }
}

/**
 * Handle keyboard input
 */
function keyPressed() {
  let ladderLength: number = gameController.ladders.length;
  let logLength: number = gameController.logs.length;
  let stoneLength: number = gameController.stones.length;

  if (keyCode == 32 && player.onGround === true) {
    player.jump();
  }
  if (keyCode == 66) {
    gameController.changeGamePhase();
  }
  if (keyCode == 49) {
    assetNumber = 1;
    if (ladderNbr < ladderLength - 1) {
      ladderNbr++;
    }
  }
  if (keyCode == 50) {
    assetNumber = 2;
    if (logNbr < logLength - 1) {
      logNbr++;
    }
  }
  if (keyCode == 51) {
    assetNumber = 3;
    if (stoneNbr < stoneLength - 1) {
      stoneNbr++;
    }
  }
  if (keyCode == 82) {
    assetNumber = 4; //Resets level
  }
  if (keyCode == 76) { //"L"
    currentScreen = 1; //Resets level
  }
}

/**
 * Handle mouse input
 */
function mousePressed() {
  if (currentScreen == 0) {
    mySong.setVolume(0.6);
    mySong.play();
    currentScreen = 1;
  }
  if (currentScreen == 3) {
    mySong.setVolume(0.6);
    mySong.play();
    currentScreen = 1;
  }

  //Start new level
  if (currentScreen == 1) {
    if (
      mouseX > windowWidth / 2 - 350 &&
      mouseX < windowWidth / 2 - 250 &&
      mouseY > windowHeight / 2 &&
      mouseY < windowHeight / 2 + 100
    ) {
      currentLevel = 0;
      gameController = new GameController();
      currentScreen = 2;
      assetNumber = 4; //Resets leve
    }
    if (
      mouseX > windowWidth / 2 - 200 &&
      mouseX < windowWidth / 2 - 100 &&
      mouseY > windowHeight / 2 &&
      mouseY < windowHeight / 2 + 100
    ) {
      currentLevel = 1;
      gameController = new GameController();
      currentScreen = 2;
      assetNumber = 4; //Resets level
    }
  }
}

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
