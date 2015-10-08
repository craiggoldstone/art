require(["angular"], function(angular) {
angular.module("myApp").run(["$templateCache", function($templateCache) {
  'use strict';

  $templateCache.put('./components/super-awesome-app/super-awesome-app.css',
    "pre {\r" +
    "\n" +
    "    color: green;\r" +
    "\n" +
    "}"
  );
}]);
});