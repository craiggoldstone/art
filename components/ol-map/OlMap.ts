import * as angular from "angular";

export interface IOlMapScope {
    message: string;
}

export class SuperAwesomeApp{
    public template = '<div id="map"></div>';
    public transclude = true;
    public scope = {};
    public link: (scope: IOlMapScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;

    constructor($location: ng.ILocationService) {
        //this._$location = $location;

        SuperAwesomeApp.prototype.link = (scope: IOlMapScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
            scope.message = 'holy shizer - ' + this.secretMessage;
            this.scope = scope;
        }
    }

    public static Factory() {
        var directive = ($location: ng.ILocationService) => {
            return new SuperAwesomeApp($location);
        };

        directive['$inject'] = ['$location'];

        return directive;
    }

    private destruct() {
        console.log('did desctuct stuff');
    }

    private secretMessage = 'secret';
}