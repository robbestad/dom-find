"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// getPageScroll() by quirksmode.org
// Finds the scroll position of a page
var getPageScroll = function getPageScroll() {
    var xScroll, yScroll;
    if (self.pageYOffset) {
        yScroll = self.pageYOffset;
        xScroll = self.pageXOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) {
        yScroll = document.documentElement.scrollTop;
        xScroll = document.documentElement.scrollLeft;
    } else if (document.body) {
        // all other Explorers
        yScroll = document.body.scrollTop;
        xScroll = document.body.scrollLeft;
    }
    return [xScroll, yScroll];
};
exports.getPageScroll = getPageScroll;

