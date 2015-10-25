require.config({
	paths: {
		// 'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular'
		'angular': 'bower_components/angular/angular',
		//'openlayers': 'bower_components/openlayers/lib/OpenLayers'
		//'openlayers': 'bower_components/openlayers/build/OpenLayers-full'
		//'openlayers': '//openlayers.org/en/v3.10.1/build/ol-debug',
		'openlayers': 'ol-3.10.11-debug',
        'proj4': 'bower_components/proj4/dist/proj4'
	},
	shim: {
		'angular': {
            exports: 'angular'
        },
		'openlayers': {
			exports: 'OpenLayers'
		},
        'proj4': {
            exports: 'proj4'
        }
	}
});
require(['angular', 'app'], function(angular, app) {
	angular.element().ready(function() {

		angular.bootstrap(angular.element(document.body), [app.name], {
			strictDi: true
		});
		console.log('bootstrapped app ' + app.name + ' with requirejs');
	});
});