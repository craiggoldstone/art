define(["require", "exports"], function (require, exports) {
    var Component = (function () {
        function Component($http, $templateCache, componentName, css) {
            this.restrict = 'E'; // element only
            this.scope = {}; // isolate scope
            this.require = []; // directive controller dependencies
            this.componentName = componentName;
            this.componentUrl = require.toUrl('../' + componentName);
            if (css) {
                this.loadStyle($http, $templateCache, this.componentUrl + '/' + componentName + '.css');
            }
        }
        // inject preloaded CSS, otherwise make a GET
        Component.prototype.loadStyle = function ($http, $templateCache, url) {
            var _this = this;
            // try to get CSS from $templateCache
            if ($templateCache.get(url)) {
                this.makeStyle('land-app-map.css', $templateCache.get(url).toString());
                console.log('found style in $templatecache: ' + url);
            }
            else {
                // not pre-cached. Make a GET (and put into the cache)
                $http({ method: 'get', url: url, cache: true }).then(function (response) {
                    _this.makeStyle('land-app-map.css', response.data);
                    console.log('got style using $http: ' + url);
                });
            }
        };
        // helper function to inject css
        Component.prototype.makeStyle = function (id, style) {
            var styleNode = document.createElement('style');
            styleNode.id = id;
            styleNode.type = 'text/css';
            if (styleNode.hasOwnProperty('styleSheet')) {
                styleNode['styleSheet'].cssText = style;
            }
            else {
                styleNode.appendChild(document.createTextNode(style));
            }
            document.head.appendChild(styleNode);
        };
        return Component;
    })();
    exports.Component = Component;
});
