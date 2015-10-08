# AngularJS 1.4, TypeScript 1.6, RequireJS

## Core concepts
- Components declare their own HTML & CSS
- Support minification (of JS and CSS)
- Support preloading concatenated CSS
- Support preloading of HTML templates [TODO]

# How?

RequireJS concatenates and minifies the javascript

CSS is dynamically loaded using Angular's $HTTP service, but it first checks the $templateCache. Grunt concatenates all component CSS files together by wrapping each template in a $templateCache.put(...) call.  This 1 file can then be loaded inside a module.run() block, so it executes before directives are instantiated.  