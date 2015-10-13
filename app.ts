/// <amd-dependency path="./components/mango/MangoModule" name="mango" />

import * as angular from "angular";
import {SuperAwesomeApp} from "./components/super-awesome-app/SuperAwesomeApp";

var app = angular.module('myApp', ["mango"]);
app.directive('superAwesomeApp', SuperAwesomeApp.Factory());

export = app;