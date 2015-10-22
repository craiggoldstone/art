import * as angular from "angular";

export class LandAppMapController {
    static $inject = ['$scope', '$element', '$attrs', '$transclude'];

    constructor($scope: ng.IScope, $element: ng.IRootElementService, $attrs: ng.IAttributes, $transclude: ng.ITranscludeFunction) {
        console.log('did new constructor');
    }
}