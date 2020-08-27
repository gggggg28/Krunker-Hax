// ==UserScript==
// @name         Guests are noobs
// @description  Replaces "Guest" in names with "Noob"
// @author       chomler
// @match        *://krunker.io/*
// @grant        none
// ==/UserScript==

Object.defineProperty(Object.prototype, "name", {enumerable: false, get(){return this?.rname?.startsWith("Guest_")?"Noob_"+this.rname.slice(6):this.rname}, set(v){this.rname=v}});
