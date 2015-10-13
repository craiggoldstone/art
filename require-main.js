require.config({
	paths: {
		// 'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular'
		'angular': 'bower_components/angular/angular'
	},
	shim: {
		'angular': {
            exports: 'angular'
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