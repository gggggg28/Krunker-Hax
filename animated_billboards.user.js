// ==UserScript==
// @name         Animated billboards
// @description  change the return 1 to return 0, return 2, or return 3 for different animations
// @author       chomler
// @match        *://krunker.io/*
// @grant        none
// ==/UserScript==

Object.defineProperty(Object.prototype, "shaderId", {enumerable: false, get(){if(this.src && this.src.startsWith("pubs/")) return 1; else return this.rshaderId}, set(v){this.rshaderId = v}});
