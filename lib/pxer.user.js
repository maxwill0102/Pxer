// ==UserScript==
// @name          Pxer-beta-6-min test1
// @namespace     https://github.com/pea3nut/Pxer
// @description   pixiv.net Tools
// @include       http://www.pixiv.net/member_illust.php?id=10009740
// ==/UserScript==
javascript:void((function() {
    window.pxerDefinePxerConfig ={
        "URL_ROOT":"http://127.0.0.1/github/pxer-beta-6/",
        "TEMPLATE_URL":'lib/template.php',
        "DEBUG":true,
    };
    document.head.appendChild(
        document.createElement("script")
    ).src
        =window.pxerDefinePxerConfig['URL_ROOT']+"lib/launcher.min.js?"
        +(new Date()).getTime()
})());