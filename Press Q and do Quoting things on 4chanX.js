// ==UserScript==
// @name         4chanX - Press Q and do Quoting Things
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author      	ECHibiki - Sage
// @match        *://boards.4chan.org/*
// @grant        none
// ==/UserScript==

document.addEventListener("keydown", function(e){
	console.log(e.key);
	if(e.key == 'q'){
		e.preventDefault();
		e.stopPropagation();
		var text = getSelectionText();
		setTimeout(function(){
			document.getElementById("qr").getElementsByTagName("TEXTAREA")[0].value += ">" + text;
		},100);
		return false;
	}
});



function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}