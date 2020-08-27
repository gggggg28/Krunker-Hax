// ==UserScript==
// @name         Make penetrable walls see-through
// @author       chomler
// @match        *://krunker.io/*
// @grant        none
// ==/UserScript==

Object.defineProperty(Object.prototype,"o",{enumerable:false,get(){return this.pe?0.7:this._opacity},set(v){this._opacity=v}});
