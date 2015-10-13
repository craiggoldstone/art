module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-requirejs');
    grunt.loadNpmTasks('grunt-angular-templates');

    grunt.initConfig({
        ngtemplates: {
            css: { // inline component CSS
                src: ['components/**/*.css'],
                dest: 'app-css-templates.js',
                options: {
                    module: 'myApp', // angular module name, should match main app module
                    prefix: './',
                    bootstrap: function(module, script) {
                        return 'require(["angular"], function(angular) {\n' +
                                'angular.module("' + module + '").run(["$templateCache", function($templateCache) {\n' +
                                script +
                                '}]);\n' +
                            '});'
                    }
                }
            },
            html: { // inline component HTML
                src: ['components/**/*.html'],
                dest: 'app-html-templates.js',
                options: {
                    module: 'myApp', // angular module name, should match main app module
                    bootstrap: function(module, script) {
                        return 'require(["angular"], function(angular) {\n' +
                            'angular.module("' + module + '").run(["$templateCache", function($templateCache) {\n' +
                            script +
                            '}]);\n' +
                            '});'
                    }
                }
            }
        },

        requirejs: {
            app: {
                options: {
                    mainConfigFile: ["require-main.js"],
                    out: "app.min.js",
                    include: ['require-main.js', 'app-html-templates', 'app-css-templates'],
                    optimize: 'uglify2',
                    generateSourceMaps: true,
                    preserveLicenseComments: false
                }
            }
        }
    });

    grunt.registerTask('dist', ['ngtemplates', 'requirejs']);

};
