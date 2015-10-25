/// <amd-dependency path="./components/mango/MangoModule" name="mango" />
define(["require", "exports", "./components/mango/MangoModule", "angular", "./components/super-awesome-app/SuperAwesomeApp", "./components/land-app-map/LandAppMap"], function (require, exports, mango, angular, SuperAwesomeApp_1, LandAppMap_1) {
    var app = angular.module('myApp', ["mango"]);
    app.directive('superAwesomeApp', SuperAwesomeApp_1.SuperAwesomeApp.Factory());
    app.directive('laMap', LandAppMap_1.LandAppMap.Factory());
    return app;
});
