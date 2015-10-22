/// <amd-dependency path="./components/mango/MangoModule" name="mango" />

import * as angular from "angular";
import {SuperAwesomeApp} from "./components/super-awesome-app/SuperAwesomeApp";
import {LandAppMap} from "./components/land-app-map/LandAppMap";

var app = angular.module('myApp', ["mango"]);
app.directive('superAwesomeApp', SuperAwesomeApp.Factory());
app.directive('laMap', LandAppMap.Factory());

export = app;