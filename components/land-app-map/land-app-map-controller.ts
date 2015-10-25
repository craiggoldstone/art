import * as angular from "angular";

export class LandAppMapController {
    static $inject = ['$scope', '$element', '$attrs', '$transclude'];

    constructor(
        private $scope: ng.IScope,
        private $element: ng.IRootElementService,
        private $attrs: ng.IAttributes,
        private $transclude: ng.ITranscludeFunction) {
        console.log('did new constructor');
    }

    // public properties to bind in the UI
    message: string = 'oak tree';

}