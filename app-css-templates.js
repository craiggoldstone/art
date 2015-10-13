require(["angular"], function(angular) {
angular.module("myApp").run(["$templateCache", function($templateCache) {
  'use strict';

  $templateCache.put('./components/mango/mango.css',
    "h1 {\n" +
    "    color: orange;\n" +
    "}"
  );


  $templateCache.put('./components/super-awesome-app/super-awesome-app.css',
    "pre {\n" +
    "    color: green;\n" +
    "}"
  );
}]);
});