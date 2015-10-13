define(["require", "exports", "angular", "./Mango"], function (require, exports, angular, Mango_1) {
    var mango = angular.module("mango", []);
    mango.directive("mango", Mango_1.Mango.Factory());
    return mango;
});
