import * as angular from "angular";

export interface ISuperAwesomeAppScope {
    message: string;
    componentUrl: string;
}

export class SuperAwesomeApp{
    public templateUrl = 'components/super-awesome-app/super-awesome-app.html';
    public restrict = 'E';
    public scope = {};
    public link: (scope: ISuperAwesomeAppScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;

    constructor($http: ng.IHttpService, $templateCache: ng.ITemplateCacheService) {


        SuperAwesomeApp.prototype.link = (scope: ISuperAwesomeAppScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
            this.scope = scope;
            scope.message = 'holy shizer - ' + this.secretMessage;
            scope.componentUrl = require.toUrl('.');

            console.log('get css', scope.componentUrl + '/super-awesome-app.css');

            var url = scope.componentUrl + '/super-awesome-app.css';
            if ($templateCache.get(url)) {
                this.makeStyle('super-awesome-app.css', $templateCache.get(url).toString());
                console.log('found style in templatecache');
            } else {
                $http({method: 'get', url: scope.componentUrl + '/super-awesome-app.css', cache: true}).then((response: any) => {
                    this.makeStyle('super-awesome-app.css', response.data);
                    console.log('got style using $http');
                });
            }
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

    private makeStyle = function makeStyle(id: string, style: string) {
        var styleNode = document.createElement('style');
        styleNode.id = id;
        styleNode.type = 'text/css';
        if (styleNode.hasOwnProperty('styleSheet')) {
            styleNode['styleSheet'].cssText = style;
        } else {
            styleNode.appendChild(document.createTextNode(style));
        }
        document.head.appendChild(styleNode);
    }
}