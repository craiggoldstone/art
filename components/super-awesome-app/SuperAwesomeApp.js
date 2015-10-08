define(["require", "exports"], function (require, exports) {
    var SuperAwesomeApp = (function () {
        function SuperAwesomeApp($http, $templateCache) {
            var _this = this;
            this.templateUrl = 'components/super-awesome-app/super-awesome-app.html';
            this.restrict = 'E';
            this.scope = {};
            this.secretMessage = 'secret';
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
            SuperAwesomeApp.prototype.link = function (scope, element, attrs) {
                _this.scope = scope;
                scope.message = 'holy shizer - ' + _this.secretMessage;
                scope.componentUrl = require.toUrl('.');
                console.log('get css', scope.componentUrl + '/super-awesome-app.css');
                var url = scope.componentUrl + '/super-awesome-app.css';
                if ($templateCache.get(url)) {
                    _this.makeStyle('super-awesome-app.css', $templateCache.get(url).toString());
                    console.log('found style in templatecache');
                }
                else {
                    $http({ method: 'get', url: scope.componentUrl + '/super-awesome-app.css', cache: true }).then(function (response) {
                        _this.makeStyle('super-awesome-app.css', response.data);
                        console.log('got style using $http');
                    });
                }
            };
        }
        SuperAwesomeApp.Factory = function () {
            var directive = function ($http, $templateCache) {
                return new SuperAwesomeApp($http, $templateCache);
            };
            directive['$inject'] = ['$http', '$templateCache'];
            return directive;
        };
        SuperAwesomeApp.prototype.destruct = function () {
            console.log('did destruct stuff');
        };
        return SuperAwesomeApp;
    })();
    exports.SuperAwesomeApp = SuperAwesomeApp;
});
