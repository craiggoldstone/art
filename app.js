define(["require", "exports", "angular", "./components/super-awesome-app/SuperAwesomeApp"], function (require, exports, angular, SuperAwesomeApp_1) {
    var app = angular.module('myApp', []);
    app.directive('superAwesomeApp', SuperAwesomeApp_1.SuperAwesomeApp.Factory());
    return app;
});
