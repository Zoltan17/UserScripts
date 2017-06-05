// ==UserScript==
// @name		YingyuetaiH5
// @namespace	https://github.com/Zoltan17/UserScripts/YinyuetaiH5
// @version		0.1
// @description	自动重定向音悦台到H5页面
// @author		Zoltan
// @include		http://v.yinyuetai.com/video/*
// @exclude		http://v.yinyuetai.com/video/h5/*
// @run-at      document-start
// @grant       none
// ==/UserScript==
window.location.href = window.location.href.replace(/video\//, 'video/h5/');