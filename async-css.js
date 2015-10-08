require(['angular'], function(angular) {
    angular.module('myApp').run(["$templateCache", function($templateCache) {
        console.log('prepopulating templateCache for', require.toUrl('./components/super-awesome-app/super-awesome-app.css'));
        $templateCache.put(require.toUrl('./components/super-awesome-app/super-awesome-app.css'),
            'pre { color: magenta; }'
        );
    }]);
});