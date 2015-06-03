"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var findPos = require("./findPos");
var getPageScroll = require("./getPageScroll");

// Finds the position of an element relative to the viewport.
var findPosRelativeToViewport = function findPosRelativeToViewport(obj) {
    var objPos = findPos(obj);
    var scroll = getPageScroll();
    return [objPos[0] - scroll[0], objPos[1] - scroll[1]];
};
exports.findPosRelativeToViewport = findPosRelativeToViewport;

