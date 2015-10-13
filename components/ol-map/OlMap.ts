import * as angular from "angular";

export interface IOlMapScope {
    message: string;
}

export class OlMap{
    public template = '<div id="map"><pre>abc</pre></div>';
    public transclude = true;
    public scope = {};
    public link: (scope: IOlMapScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;

    constructor($location: ng.ILocationService) {
        //this._$location = $location;

        OlMap.prototype.link = (scope: IOlMapScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
            scope.message = 'holy shizer - ' + this.secretMessage;
            this.scope = scope;
        }
    }

    public static Factory() {
        var directive = ($location: ng.ILocationService) => {
            return new OlMap($location);
        };

        directive['$inject'] = ['$location'];

        return directive;
    }

    private destruct() {
        console.log('did desctuct stuff');
    }

    private secretMessage = 'secret';
}