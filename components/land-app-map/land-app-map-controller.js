define(["require", "exports"], function (require, exports) {
    var LandAppMapController = (function () {
        function LandAppMapController($scope, $element, $attrs, $transclude) {
            console.log('did new constructor');
        }
        LandAppMapController.$inject = ['$scope', '$element', '$attrs', '$transclude'];
        return LandAppMapController;
    })();
    exports.LandAppMapController = LandAppMapController;
});
//# sourceMappingURL=land-app-map-controller.js.map