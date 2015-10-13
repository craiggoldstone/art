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


  $templateCache.put('./components/mango/mango.html',
    "<div><h1>MANGO: {{message}}</h1></div>"
  );


  $templateCache.put('./components/super-awesome-app/super-awesome-app.html',
    "<div><pre>message: {{message}}</pre></div>\n" +
    "<ol-map></ol-map>\n" +
    "<mango></mango>"
  );
}]);
});