let gameController: any;
let player: any;
let blockImage: p5.Image;
let finishImage: p5.Image;

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
    // Tyvärr har jag inte fått till den globala typningen för
    // inladdningen av ljud men fungerar bra enligt nedan..
    // sound = (window as any).loadSound('../assets/mySound.wav');
    blockImage = loadImage('./assets/images/dirtblock.png');
    finishImage = loadImage('./assets/images/cigarette.png');
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
    gameController.buildPhase(); 
    player.show();
    player.run();
    player.update();
    gameController.collisionDetection(player);    
}

/**
 * Handle keyboard input
 */
function keyPressed() {
    if(keyCode == 32) {
        player.jump();
    }
} 

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}