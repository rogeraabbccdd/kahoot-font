// ==UserScript==
// @name         Kahoot font
// @namespace    https://github.com/rogeraabbccdd/kahoot-font
// @updateURL https://raw.githubusercontent.com/rogeraabbccdd/kahoot-font/master/kahoot-font.user.js
// @downloadURL https://raw.githubusercontent.com/rogeraabbccdd/kahoot-font/master/kahoot-font.user.js
// @version      1.1
// @description  Change font size and font face in Kahoot!.
// @author       rogeraabbccdd
// @include       *.kahoot.*/*
// @grant          GM_addStyle
// ==/UserScript==
//
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//               佛祖保佑         永無BUG
//
//
//
/* style.css
 .richText.question = 倒數時顯示的題目，預設48px
 .launcher .quizInfo .name = 讀取時的測驗標題，預設34px
 div.title = 預備時的測驗標題，預設40px;
 */
GM_addStyle('.richText.question { font-size: 60px !important; font-family:"Microsoft JhengHei";} .launcher .quizInfo .name { font-size: 50px !important; font-family:"Microsoft JhengHei";} div.title { font-size: 60px !important; font-family:"Microsoft JhengHei";} ');

/* player.min.css in iframe "gameBlockIframe"
 span.question-choices__card-text = 選項，預設1.125rem
 h1.question-bar__title = 選項出現時上面的題目，預設1.25rem;
*/
var iframe = document.getElementsByTagName('iframe')[0];
iframe.addEventListener("load", function() {
    var node = document.createElement('style');
    node.appendChild(document.createTextNode('span.question-choices__card-text { font-size: 2.7rem !important; font-family:"Microsoft JhengHei"; } h1.question-bar__title { font-size: 3rem !important; font-family:"Microsoft JhengHei";}'));
    window.frames[0].document.head.appendChild(node);
});
