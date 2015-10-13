import * as angular from "angular";

export interface IMangoScope {
    message: string;
    componentUrl: string;
}

export class Mango {
    public templateUrl = 'components/mango/mango.html';
    public restrict = 'E';
    public scope = {};
    public link: (scope: IMangoScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;

    constructor($http: ng.IHttpService, $templateCache: ng.ITemplateCacheService) {

        const con = Math.PI / 2;

        Mango.prototype.link = (scope: IMangoScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
            this.scope = scope;
            scope.message = 'tastes good' + con;

            scope.componentUrl = require.toUrl('.');

            console.log('get css', scope.componentUrl + '/mango.css');

            var url = scope.componentUrl + '/mango.css';
            if ($templateCache.get(url)) {
                this.makeStyle('mango.css', $templateCache.get(url).toString());
                console.log('found style in templatecache');
            } else {
                $http({method: 'get', url: scope.componentUrl + '/mango.css', cache: true}).then((response: any) => {
                    this.makeStyle('mango.css', response.data);
                    console.log('got style using $http');
                });
            }
        }
    }

    public static Factory() {
        var directive = ($http: ng.IHttpService, $templateCache: ng.ITemplateCacheService) => {
            return new Mango($http, $templateCache);
        };

        directive['$inject'] = ['$http', '$templateCache'];

        return directive;
    }

    private destruct() {
        console.log('did destruct stuff');
    }

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