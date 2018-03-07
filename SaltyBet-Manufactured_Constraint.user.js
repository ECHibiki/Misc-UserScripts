// ==UserScript==
// @name         Manufactured Constraint
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.saltybet.com/
// @grant        none
// ==/UserScript==

(function() {
    setInterval(function(){
        var val = document.getElementById("wager").value;
        var max = document.getElementById("interval10").value;
        if(parseInt(val) > parseInt(max)){
            document.getElementById("wager").value = max;
        }
    },100);
})();