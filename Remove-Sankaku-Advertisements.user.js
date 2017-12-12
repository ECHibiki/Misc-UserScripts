// ==UserScript==
// @name         Remove Sankaku Advertisements/Iframes
// @description  Hopefully removes all ads from *.sankaku
// @namespace    http://tampermonkey.net/
// @version      3.4
// @author       ECHibiki
// @match        *://*.sankakucomplex.com/*
// @updateURL    https://github.com/ECHibiki/Misc-UserScripts/raw/master/Remove-Sankaku-Advertisements.user.js
// @downloadURL  https://github.com/ECHibiki/Misc-UserScripts/raw/master/Remove-Sankaku-Advertisements.user.js
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