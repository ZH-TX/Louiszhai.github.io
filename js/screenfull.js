!function(e,l){"use strict";var n="undefined"!=typeof module&&module.exports,r="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,t=function(){for(var e,n,r=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],t=0,u=r.length,c={};u>t;t++)if(e=r[t],e&&e[1]in l){for(t=0,n=e.length;n>t;t++)c[r[0][t]]=e[t];return c}return!1}(),u={request:function(e){var n=t.requestFullscreen;e=e||l.documentElement,/5\.1[\.\d]* Safari/.test(navigator.userAgent)?e[n]():e[n](r&&Element.ALLOW_KEYBOARD_INPUT)},exit:function(){l[t.exitFullscreen]()},toggle:function(e){this.isFullscreen?this.exit():this.request(e)},raw:t};return t?(Object.defineProperties(u,{isFullscreen:{get:function(){return Boolean(l[t.fullscreenElement])}},element:{enumerable:!0,get:function(){return l[t.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(l[t.fullscreenEnabled])}}}),n?module.exports=u:e.screenfull=u,void l.addEventListener("keydown",function(e){(e.metaKey||e.ctrlKey)&&13==e.keyCode&&(u.enabled?u.toggle(l.documentElement):console.log("您的浏览器暂不支持全屏"))})):void(n?module.exports=!1:e.screenfull=!1)}(window,document);