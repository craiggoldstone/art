var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../component/Component"], function (require, exports, Component_1) {
    var IAppLeftMenuScope = (function () {
        function IAppLeftMenuScope() {
        }
        return IAppLeftMenuScope;
    })();
    exports.IAppLeftMenuScope = IAppLeftMenuScope;
    var AppLeftMenu = (function (_super) {
        __extends(AppLeftMenu, _super);
        function AppLeftMenu($http, $templateCache) {
            _super.call(this, $http, $templateCache, 'app-left-menu', true);
            this.templateUrl = 'components/land-app-map/land-app-map.html';
            this.restrict = 'E';
            this.scope = {}; // isolate scope
            this.controllerAs = 'leftMenuCtrl';
            //public controller = LandAppMapController;
            this.name = 'land-app-map';
        }
        return AppLeftMenu;
    })(Component_1.Component);
    exports.AppLeftMenu = AppLeftMenu;
});
