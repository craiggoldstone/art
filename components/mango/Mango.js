define(["require", "exports"], function (require, exports) {
    var Mango = (function () {
        function Mango($http, $templateCache) {
            var _this = this;
            this.templateUrl = 'components/mango/mango.html';
            this.restrict = 'E';
            this.scope = {};
            this.makeStyle = function makeStyle(id, style) {
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
            var con = Math.PI / 2;
            Mango.prototype.link = function (scope, element, attrs) {
                _this.scope = scope;
                scope.message = 'tastes good' + con;
                scope.componentUrl = require.toUrl('.');
                console.log('get css', scope.componentUrl + '/mango.css');
                var url = scope.componentUrl + '/mango.css';
                if ($templateCache.get(url)) {
                    _this.makeStyle('mango.css', $templateCache.get(url).toString());
                    console.log('found style in templatecache');
                }
                else {
                    $http({ method: 'get', url: scope.componentUrl + '/mango.css', cache: true }).then(function (response) {
                        _this.makeStyle('mango.css', response.data);
                        console.log('got style using $http');
                    });
                }
            };
        }
        Mango.Factory = function () {
            var directive = function ($http, $templateCache) {
                return new Mango($http, $templateCache);
            };
            directive['$inject'] = ['$http', '$templateCache'];
            return directive;
        };
        Mango.prototype.destruct = function () {
            console.log('did destruct stuff');
        };
        return Mango;
    })();
    exports.Mango = Mango;
});
