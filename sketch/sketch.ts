let gameController: any;
let player: any;
let blockImage: p5.Image;
let finishImage: p5.Image;
let ladderImage: p5.Image;
let stoneImage: p5.Image;
let logImage: p5.Image;
let assetNumber: number;
let ladderNbr : number = -1;
let logNbr : number = -1;
let stoneNbr : number = -1;

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
    // Tyvärr har jag inte fått till den globala typningen för
    // inladdningen av ljud men fungerar bra enligt nedan..
    // sound = (window as any).loadSound('../assets/mySound.wav');
    blockImage = loadImage('./assets/images/skullblock.png');
    finishImage = loadImage('./assets/images/cigarette.png');
    ladderImage = loadImage('./assets/images/ladder.png');
    logImage = loadImage('./assets/images/log.png');
    stoneImage = loadImage('./assets/images/stone.png');

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
    gameController = new GameController();
    player = gameController.drawLevel();    
}

/**
 * Built in draw function in P5
 * This is a good place to call public funcions of the object
 * you created in the setup function above
 */
function draw() {
    background(21);
    gameController.drawGameArea();
    gameController.drawSidebar();
    gameController.drawLevel();
    gameController.drawAssets();    
    player.show();
    player.run();
    player.update();
    gameController.collisionDetection(player);
    gameController.buildPhase(assetNumber, ladderNbr); 
    if (mouseIsPressed) {
        assetNumber = 0;
    }   
}

/**
 * Handle keyboard input
 */
function keyPressed() {
    let ladderLength: number = gameController.ladders.length;    
    let logLength: number = gameController.logs.length;    
    let stoneLength: number = gameController.stones.length;    

    if(keyCode == 32) {
        player.jump();
    }
    if(keyCode == 66) {
        gameController.changeGamePhase();    
    }
    if(keyCode == 49) {
        assetNumber = 1;
        if(ladderNbr < ladderLength - 1) {
            ladderNbr++
        }
    }
    if(keyCode == 50) {
        assetNumber = 2;
        if(logNbr < logLength - 1) {
            logNbr++
        }
    }
    if(keyCode == 51) {
        assetNumber = 3;
        if(stoneNbr < stoneLength - 1) {
            stoneNbr++
        }
    }
} 

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}