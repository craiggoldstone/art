# AngularJS 1.4, TypeScript 1.6, RequireJS

## Core concepts
- [No Controllers](http://teropa.info/blog/2014/10/24/how-ive-improved-my-angular-apps-by-banning-ng-controller.html#comment-1660151019).  Only 'Components'
- Components declare their own HTML & CSS and support lazy-loading
- Components can be an Angular directive
- Components can be an Angular module, containing directives & services etc
- Use TypeScript features as much as possible to get reasonably close to Angular2 code style
- Support minification (of JS and CSS)
- Support preloading concatenated CSS
- Support preloading concatenated HTML templates

## Installation
```javascript
npm install
bower install
http-server -p 8080
```
Note: serve the files however you like.  I chose [http-server](https://www.npmjs.com/package/http-server)

It should work from any context using relative paths, but is untested from anything except /

## Building the code
```bash
# transpile typescript
tsc

# create minified .js build - includes inline CSS and HTML templates
grunt dist
```

## How?

RequireJS concatenates and minifies the javascript

HTML templates are loaded using ngInclude which uses $http and $templateCache by default.  Grunt concatenates all component HTML templates together, then requirejs injects this into the minified js build.  Take a look at grunt-angular-templates and gruntfile.js to see more about this technique of inlining.

CSS loads dynamically using Angular's $http service, but it checks the $templateCache before resorting to $http. Grunt concatenates all component CSS files together using the same technique as HTML templates (grunt-angular-templates)
