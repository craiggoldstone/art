import {Component} from "../component/Component";
import * as angular from "angular";

export class IAppLeftMenuScope {

}

export class AppLeftMenu extends Component {
    public templateUrl: string = 'components/land-app-map/land-app-map.html';
    public restrict: string = 'E';
    public scope = {}; // isolate scope
    public link: (scope: IAppLeftMenuScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
    public controllerAs: string = 'leftMenuCtrl';
    //public controller = LandAppMapController;
    public name: string = 'land-app-map';

    constructor($http: ng.IHttpService, $templateCache: ng.ITemplateCacheService) {
        super($http, $templateCache, 'app-left-menu', true);
    }
}