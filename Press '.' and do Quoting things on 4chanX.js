// ==UserScript==
// @name         Press Q and do Quoting things on 4chanX
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author      	ECHibiki - Sage
// @match        *://boards.4chan.org/*
// @grant        none
// ==/UserScript==


var THAT_FIELD_YOU_CHANGE_TO_SET_YOUR_HOTKEY_CHARACTER = ".";



var qr_open = false;

document.addEventListener("keydown", function(e){
	console.log(document.activeElement.tagName );
	console.log(document.activeElement);
	if(e.key == THAT_FIELD_YOU_CHANGE_TO_SET_YOUR_HOTKEY_CHARACTER && !(document.activeElement.tagName == "INPUT" || document.activeElement.tagName == "TEXTAREA")){
		var text = getSelectionText();
		e.preventDefault();
		e.stopPropagation();
		if(!qr_open) document.getElementsByClassName("qr-link")[0].click();
		console.log(document.getElementsByClassName("qr-link")[0]);
		setTimeout(function(){
			document.getElementById("qr").getElementsByTagName("TEXTAREA")[0].value += ">" + text + "\n";
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