"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// findPos() by quirksmode.org
// Finds the absolute position of an element on a page
var findPos = function findPos(obj) {
    var curleft = 0,
        curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    }
    return [curleft, curtop];
};
exports.findPos = findPos;

