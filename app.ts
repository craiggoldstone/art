import * as angular from "angular";
import {SuperAwesomeApp} from "./components/super-awesome-app/SuperAwesomeApp";

var app = angular.module('myApp', []);
app.directive('superAwesomeApp', SuperAwesomeApp.Factory());

export = app;