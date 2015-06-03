"use strict";

// findPos() by quirksmode.org
// Finds the absolute position of an element on a page
var findPos = require("./findpos");
var getPageScroll = require("./getpagescroll");
var findPosRelativeToViewport = require("./findpostrelativetoviewport");

exports.findPos = findPos();
exports.getPageScroll = getPageScroll();
exports.findPosRelativeToViewport = findPosRelativeToViewport();

