var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../component/Component"], function (require, exports, Component_1) {
    var SuperAwesomeApp = (function (_super) {
        __extends(SuperAwesomeApp, _super);
        function SuperAwesomeApp($http, $templateCache) {
            var _this = this;
            _super.call(this, $http, $templateCache, 'super-awesome-app', true);
            this.templateUrl = 'components/super-awesome-app/super-awesome-app.html';
            this.restrict = 'E';
            this.scope = {};
            this.secretMessage = 'secret';
            SuperAwesomeApp.prototype.link = function (scope, element, attrs) {
                _this.scope = scope;
                scope.message = 'holy shizer - ' + _this.secretMessage;
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
    })(Component_1.Component);
    exports.SuperAwesomeApp = SuperAwesomeApp;
});
