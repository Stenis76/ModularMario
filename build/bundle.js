"use strict";
var Level = (function () {
    function Level(listOfLevelObjects) {
        this.listOfLevelObjects = [];
        this.listOfLevelObjects = listOfLevelObjects;
    }
    Level.prototype.draw = function () {
        for (var i = 0; i < this.listOfLevelObjects.length; i++) {
            console.log('hej');
        }
    };
    return Level;
}());
var LevelFactory = (function () {
    function LevelFactory() {
        this.levels = [
            [1, 2, 3, 4, 1, 1, 1],
            [1, 3, 3, 3, 4]
        ];
    }
    LevelFactory.prototype.getLevel = function (currentLevel) {
        var level = this.levels;
        var listOfLevelObjects = [];
        for (var i = 0; i < level[currentLevel].length; i++) {
            switch (level[currentLevel][i]) {
                case 1:
                    listOfLevelObjects.push(new Block(20, 20, 20, 20, false));
                    break;
            }
        }
        return new Level(listOfLevelObjects);
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
        fill(100, 0, 255);
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
var Block = (function (_super) {
    __extends(Block, _super);
    function Block(x, y, w, h, deadly) {
        var _this = _super.call(this, x, y, w, h) || this;
        _this.deadly = deadly;
        return _this;
    }
    return Block;
}(LevelObject));
var createNewLevel;
function preload() {
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    noCursor();
    fullscreen();
    createNewLevel = new LevelFactory();
}
function draw() {
    background(21);
    createNewLevel.getLevel(0);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
//# sourceMappingURL=bundle.js.map