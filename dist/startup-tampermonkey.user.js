// ==UserScript==
// @name         startup-tampermonkey
// @namespace    https://github.com/wChenonly/startup-tampermonkey
// @version      0.0.0
// @author       wChenonly
// @description  Tampermonkey script template
// @license      MIT
// @homepage     https://github.com/wChenonly/startup-tampermonkey#readme
// @homepageURL  https://github.com/wChenonly/startup-tampermonkey#readme
// @source       https://github.com/wChenonly/startup-tampermonkey.git
// @supportURL   https://github.com/wChenonly/startup-tampermonkey/issues
// @include      *://**/*
// @grant        unsafeWindow
// ==/UserScript==

(function () {
	'use strict';

	var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
	console.log(_unsafeWindow);

})();
