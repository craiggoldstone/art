module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-requirejs');
    grunt.loadNpmTasks('grunt-angular-templates');

    grunt.initConfig({
        ngtemplates: {
            app: {
                src: 'components/**/*.css',
                dest: 'templates.js',
                options: {
                    module: 'myApp', // angular module name
                    prefix: './',
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
            compile: {
                options: {
                    mainConfigFile: ["require-main.js"],
                    out: "all.js",
                    include: ['require-main.js', 'templates'],
                    optimize: 'none'
                }
            }
        }
    })
};
