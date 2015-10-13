import * as angular from "angular";
import {Mango} from "./Mango";

var mango = angular.module("mango", []);
mango.directive("mango", Mango.Factory());

export = mango;