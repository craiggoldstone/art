import * as angular from "angular";

export class Component implements ng.IDirective {
    public restrict: string = 'E'; // element only
    public scope = {}; // isolate scope
    public templateUrl: string;
    public link: (scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
    public controllerAs: string;
    public controller: any;
    public require: Array<string> = <Array<string>>[]; // directive controller dependencies

    public componentName: string;
    protected componentUrl: string;

    constructor($http: ng.IHttpService, $templateCache: ng.ITemplateCacheService, componentName: string, css: boolean) {
        this.componentName = componentName;
        this.componentUrl = require.toUrl('../' + componentName);
        if (css) {
            this.loadStyle($http, $templateCache, this.componentUrl + '/' + componentName + '.css');
        }
    }

    // inject preloaded CSS, otherwise make a GET
    protected loadStyle($http: ng.IHttpService, $templateCache: ng.ITemplateCacheService, url: string) {

        // try to get CSS from $templateCache
        if ($templateCache.get(url)) {
            this.makeStyle('land-app-map.css', $templateCache.get(url).toString());
            console.log('found style in $templatecache: ' + url);
        } else {

            // not pre-cached. Make a GET (and put into the cache)
            $http({method: 'get', url: url, cache: true}).then((response: any) => {
                this.makeStyle('land-app-map.css', response.data);
                console.log('got style using $http: ' + url);
            });
        }
    }

    // helper function to inject css
    private makeStyle(id: string, style: string) {
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