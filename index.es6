"use strict";

// findPos() by quirksmode.org
// Finds the absolute position of an element on a page
const findPos = require("./findpos");
const getPageScroll = require("./getpagescroll");
const findPosRelativeToViewport = require("./findpostrelativetoviewport");

exports.findPos = findPos();
exports.getPageScroll = getPageScroll();
exports.findPosRelativeToViewport = findPosRelativeToViewport();