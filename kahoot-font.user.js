// ==UserScript==
// @name         Kahoot font
// @namespace    https://github.com/rogeraabbccdd/kahoot-font
// @updateURL https://raw.githubusercontent.com/rogeraabbccdd/kahoot-font/master/kahoot-font.user.js
// @downloadURL https://raw.githubusercontent.com/rogeraabbccdd/kahoot-font/master/kahoot-font.user.js
// @version      1.0
// @description  Change font size and font face in Kahoot!.
// @author       rogeraabbccdd
// @include       *.kahoot.*/*
// @grant          GM_addStyle
// ==/UserScript==

GM_addStyle('.richText.question { font-size: 75px !important; font-family:"Microsoft JhengHei";} .launcher .quizInfo .name { font-size: 70px !important; font-family:"Microsoft JhengHei";} ');
var iframe = document.getElementsByTagName('iframe')[0];
iframe.addEventListener("load", function() {
    var node = document.createElement('style');
    node.appendChild(document.createTextNode('span.question-choices__card-text { font-size: 4rem !important; font-family:"Microsoft JhengHei"; } h1.question-bar__title { font-size: 4rem !important; font-family:"Microsoft JhengHei";}'));
    window.frames[0].document.head.appendChild(node);
});