// ==UserScript==
// @name         Remove Sankaku Advertisements/Iframes
// @description  Hopefully removes all ads from *.sankaku
// @namespace    http://tampermonkey.net/
// @version      3.3
// @author       ECHibiki
// @match        *://*.sankakucomplex.com/*
// @grant        none
// ==/UserScript==

window.onload = function(){
    var frames = document.getElementsByTagName("IFRAME");
    for (var j = 0 ; j < frames.length ; j++){
        frames[j].remove();
    }
};

setInterval(function(){
    var frames = document.getElementsByTagName("IFRAME");
    for (var j = 0 ; j < frames.length ; j++){
        frames[j].remove();
    }
}, 500);