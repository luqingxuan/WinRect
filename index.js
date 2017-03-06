;
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS之类的
        module.exports = factory();
    } else {
        // 浏览器全局变量(root 即 window)
        root.returnExports = factory();
    }
}(this, function($) {
    return function obtainWindowRect() {
        var width = window.innerWidth;
        var height = window.innerHeight;

        if (typeof width != 'number') { // IE 5/6/7/8
            if (document.compatMode == 'CSS1Compat') {
                width = document.documentElement.clientWidth;
                height = document.docuementElement.clientHeight;
            } else {
                width = document.body.clientWidth;
                height = document.body.clientHeight;
            }
        }

        return {
            width: width,
            height: height,
            top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
            left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft
        };
    }

}));
