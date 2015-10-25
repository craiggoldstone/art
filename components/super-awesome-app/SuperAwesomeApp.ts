import * as angular from "angular";
import {Component} from "../component/Component";

export interface ISuperAwesomeAppScope {
    message: string;
    componentUrl: string;
}

export class SuperAwesomeApp extends Component {
    public templateUrl = 'components/super-awesome-app/super-awesome-app.html';
    public restrict = 'E';
    public scope = {};
    public link: (scope: ISuperAwesomeAppScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;

    constructor($http: ng.IHttpService, $templateCache: ng.ITemplateCacheService) {
        super($http, $templateCache, 'super-awesome-app', true);

        SuperAwesomeApp.prototype.link = (scope: ISuperAwesomeAppScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {

            this.scope = scope;
            scope.message = 'holy shizer - ' + this.secretMessage;
        }
    }

    public static Factory() {
        var directive = ($http: ng.IHttpService, $templateCache: ng.ITemplateCacheService) => {
            return new SuperAwesomeApp($http, $templateCache);
        };

        directive['$inject'] = ['$http', '$templateCache'];

        return directive;
    }

    private destruct() {
        console.log('did destruct stuff');
    }

    private secretMessage = 'secret';
}