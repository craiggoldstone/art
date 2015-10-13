/// <amd-dependency path="./components/mango/MangoModule" name="mango" />
define(["require", "exports", "./components/mango/MangoModule", "angular", "./components/super-awesome-app/SuperAwesomeApp"], function (require, exports, mango, angular, SuperAwesomeApp_1) {
    var app = angular.module('myApp', ["mango"]);
    app.directive('superAwesomeApp', SuperAwesomeApp_1.SuperAwesomeApp.Factory());
    return app;
});
