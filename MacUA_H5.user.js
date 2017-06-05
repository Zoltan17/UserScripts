// ==UserScript==
// @name		MacView
// @namespace	https://github.com/Zoltan17
// @description	伪装成Mac同时禁用flash,启用HTML5播放器
// @author		Zoltan17
// @include		*://v.qq.com/*
// @include		*://lol.qq.com/v/*
// @include		*://film.qq.com/*
// @include		*://view.inews.qq.com/*
// @grant		none
// @run-at		document-start
// ==/UserScript==
Object.defineProperty(navigator, 'plugins', {
  get: function () {
    return { length: 0 };
  }
});
'use strict';
Object.defineProperty(navigator,"userAgent",{value:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:51.0) Gecko/20100101 Firefox/51.0",writable:false,configurable:false,enumerable:true});
