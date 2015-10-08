define(["require", "exports"], function (require, exports) {
    var SuperAwesomeApp = (function () {
        function SuperAwesomeApp($location) {
            //this._$location = $location;
            var _this = this;
            this.template = '<div id="map"></div>';
            this.transclude = true;
            this.scope = {};
            this.secretMessage = 'secret';
            SuperAwesomeApp.prototype.link = function (scope, element, attrs) {
                scope.message = 'holy shizer - ' + _this.secretMessage;
                _this.scope = scope;
            };
        }
        SuperAwesomeApp.Factory = function () {
            var directive = function ($location) {
                return new SuperAwesomeApp($location);
            };
            directive['$inject'] = ['$location'];
            return directive;
        };
        SuperAwesomeApp.prototype.destruct = function () {
            console.log('did desctuct stuff');
        };
        return SuperAwesomeApp;
    })();
    exports.SuperAwesomeApp = SuperAwesomeApp;
});
