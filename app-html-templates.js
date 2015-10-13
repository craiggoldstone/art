require(["angular"], function(angular) {
angular.module("myApp").run(["$templateCache", function($templateCache) {
  'use strict';

  $templateCache.put('components/mango/mango.html',
    "<h1>MANGO: {{message}}</h1>"
  );


  $templateCache.put('components/super-awesome-app/super-awesome-app.html',
    "<div><pre>message: {{message}}</pre></div>\n" +
    "<ol-map></ol-map>\n" +
    "<mango></mango>"
  );
}]);
});