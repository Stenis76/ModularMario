"use strict";
var GameArea = (function () {
    function GameArea() {
        this.w = height;
        this.h = height;
        this.x = width / 4;
        this.y = 0;
    }
    GameArea.prototype.draw = function () {
        fill(100);
        rect(this.x, this.y, this.w, this.h);
    };
    return GameArea;
}());
var GameController = (function () {
    function GameController() {
        this.currentLevel = 0;
        this.levelFactory = new LevelFactory();
        this.level = this.levelFactory.getLevel(this.currentLevel);
    }
    GameController.prototype.drawGameArea = function () {
        var gameArea = new GameArea();
        gameArea.draw();
    };
    GameController.prototype.drawLevel = function () {
        var char = 0;
        for (var i = 0; i < this.level.levelObjects.length; i++) {
            this.level.levelObjects[i].draw();
            if (this.level.levelObjects[i].constructor == Character) {
                char = i;
            }
        }
        return this.level.levelObjects[char];
    };
    GameController.prototype.collisionDetection = function (character) {
        var collideBlocks = [];
        for (var i = 0; i < this.level.levelObjects.length; i++) {
            if (this.level.levelObjects[i].constructor == Block) {
                collideBlocks.push(this.level.levelObjects[i]);
            }
        }
        for (var i = 0; i < collideBlocks.length; i++) {
            if (character.x < collideBlocks[i].x + collideBlocks[i].w &&
                character.x + character.w > collideBlocks[i].x &&
                character.y < collideBlocks[i].y
                &&
                    character.y + character.h > collideBlocks[i].y) {
                character.y = collideBlocks[i].y - character.h;
                character.vy = 0;
            }
        }
    };
    return GameController;
}());
var Level = (function () {
    function Level(listOfLevelObjects) {
        this.levelObjects = [];
        this.levelObjects = listOfLevelObjects;
    }
    return Level;
}());
var LevelFactory = (function () {
    function LevelFactory() {
        this.GA = new GameArea();
        this.levels = [
            {
                assets: [],
                layout: [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [4, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ]
            }
        ];
    }
    LevelFactory.prototype.getLevel = function (currentLevel) {
        var x = this.GA.x;
        var y = this.GA.y;
        var w = this.GA.w / 20;
        var h = this.GA.h / 20;
        var levelObjects = [];
        for (var i = 0; i < this.levels[currentLevel].layout.length; i++) {
            for (var j = 0; j < this.levels[currentLevel].layout[i].length; j++) {
                switch (this.levels[currentLevel].layout[i][j]) {
                    case 1:
                        var block = new Block(x, y, w, h, false);
                        levelObjects.push(block);
                        break;
                    case 2:
                        var startBlock = new StartBlock(x, y, w, h);
                        levelObjects.push(startBlock);
                        break;
                    case 3:
                        var finishBlock = new FinishBlock(x, y, w, h);
                        levelObjects.push(finishBlock);
                        break;
                    case 4:
                        var character = new Character(x, y, w, h);
                        levelObjects.push(character);
                        break;
                }
                x += w;
            }
            x = this.GA.x;
            y += h;
        }
        return new Level(levelObjects);
    };
    return LevelFactory;
}());
var LevelObject = (function () {
    function LevelObject(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    LevelObject.prototype.draw = function () {
        fill(0, 0, 0, 0);
        noStroke();
        rect(this.x, this.y, this.w, this.h);
    };
    return LevelObject;
}());
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var StartBlock = (function (_super) {
    __extends(StartBlock, _super);
    function StartBlock(x, y, w, h) {
        return _super.call(this, x, y, w, h) || this;
    }
    StartBlock.prototype.draw = function () {
        fill('red');
        rect(this.x, this.y, this.w, this.h);
    };
    return StartBlock;
}(LevelObject));
var Block = (function (_super) {
    __extends(Block, _super);
    function Block(x, y, w, h, deadly) {
        var _this = _super.call(this, x, y, w, h) || this;
        _this.deadly = deadly;
        return _this;
    }
    Block.prototype.draw = function () {
        fill('white');
        rect(this.x, this.y, this.w, this.h);
    };
    return Block;
}(LevelObject));
var Character = (function (_super) {
    __extends(Character, _super);
    function Character(x, y, w, h) {
        var _this = _super.call(this, x, y, w, h) || this;
        _this.GA = new GameArea();
        _this.vy = 0;
        _this.gravity = 1;
        return _this;
    }
    Character.prototype.jump = function () {
        this.vy = -15;
    };
    Character.prototype.update = function () {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, this.GA.h - this.h);
    };
    Character.prototype.run = function () {
        if (keyIsDown(65)) {
            this.x -= 5;
        }
        if (keyIsDown(68)) {
            this.x += 5;
        }
        if (this.x < this.GA.x) {
            this.x = this.GA.x;
        }
        else if (this.x > this.GA.x + this.GA.w - this.w) {
            this.x = this.GA.x + this.GA.w - this.w;
        }
    };
    Character.prototype.show = function () {
        fill(180, 20, 255);
        rect(this.x, this.y, this.w, this.h);
    };
    return Character;
}(LevelObject));
var FinishBlock = (function (_super) {
    __extends(FinishBlock, _super);
    function FinishBlock(x, y, w, h) {
        return _super.call(this, x, y, w, h) || this;
    }
    FinishBlock.prototype.draw = function () {
        fill('green');
        rect(this.x, this.y, this.w, this.h);
    };
    return FinishBlock;
}(LevelObject));
var gameController;
var player;
function preload() {
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    fullscreen();
    gameController = new GameController();
    player = gameController.drawLevel();
}
function draw() {
    background(21);
    gameController.drawGameArea();
    gameController.drawLevel();
    player.show();
    player.run();
    player.update();
    gameController.collisionDetection(player);
}
function keyPressed() {
    if (keyCode == 32) {
        player.jump();
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
//# sourceMappingURL=bundle.js.map