// ==UserScript==
// @name         Simple Nametags
// @author       chomler
// @match        *://krunker.io/*
// @grant        none
// ==/UserScript==

Function.prototype.toString = new Proxy(Function.prototype.toString, {
    apply(target, thisArg, argArray) {
        let ret = target.apply(thisArg, argArray);
        if (ret.length > 3500000 && ret.includes("function anonymous"))
            Object.defineProperty(Object.prototype, /if\(!\w+\['(\w+)']\)continue/.exec(ret)[1], {value: true, enumerable: false});
        return ret
    }
})
