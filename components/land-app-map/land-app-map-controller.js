define(["require", "exports"], function (require, exports) {
    var LandAppMapController = (function () {
        function LandAppMapController($scope, $element, $attrs, $transclude) {
            this.$scope = $scope;
            this.$element = $element;
            this.$attrs = $attrs;
            this.$transclude = $transclude;
            // public properties to bind in the UI
            this.message = 'oak tree';
            console.log('did new constructor');
        }
        LandAppMapController.$inject = ['$scope', '$element', '$attrs', '$transclude'];
        return LandAppMapController;
    })();
    exports.LandAppMapController = LandAppMapController;
});
