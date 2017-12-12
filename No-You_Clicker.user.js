// ==UserScript==
// @name         No-You Clicker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://no-you.com/jp/*
// @match        http://no-you.com/jp/index.html
// @grant        none
// ==/UserScript==

(function() {
    setInterval(function(){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', "/heh.php", true);
        xhr.responseType = 'json';
        xhr.onload = function() {
            var status = xhr.status;
            if (status == 200) {
                var val = xhr.response;//document.getElementById("ctr").value;
                var digitOne = val % 10;
                var digitTwo = (val % 100 - digitOne)/10;
                console.log(val + " " + digitOne + " " + digitTwo);
                if(digitOne != digitTwo)
                    document.getElementById("ctr").click();
            }
            else {
                console.log("err");
            }
        };
        xhr.send();
    }, 2000 );
    // Your code here...
})();