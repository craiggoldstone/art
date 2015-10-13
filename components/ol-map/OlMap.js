define(["require", "exports"], function (require, exports) {
    var OlMap = (function () {
        function OlMap($location) {
            //this._$location = $location;
            var _this = this;
            this.template = '<div id="map"><pre>abc</pre></div>';
            this.transclude = true;
            this.scope = {};
            this.secretMessage = 'secret';
            OlMap.prototype.link = function (scope, element, attrs) {
                scope.message = 'holy shizer - ' + _this.secretMessage;
                _this.scope = scope;
            };
        }
        OlMap.Factory = function () {
            var directive = function ($location) {
                return new OlMap($location);
            };
            directive['$inject'] = ['$location'];
            return directive;
        };
        OlMap.prototype.destruct = function () {
            console.log('did desctuct stuff');
        };
        return OlMap;
    })();
    exports.OlMap = OlMap;
});
