module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-requirejs');

    grunt.initConfig({

        less: {
            components: {
                options: {
                },
                files: [{
                    expand: true,
                    src: "components/**/*.less",
                    ext: ".css"
                }]
            }
        },

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
                    mainConfigFile: ["config.js"],
                    out: "app.min.js",
                    include: ['config.js', 'app-html-templates', 'app-css-templates'],
                    optimize: 'uglify2',
                    generateSourceMaps: true,
                    preserveLicenseComments: false
                }
            }
        },

        watch: {
            less: {
                files: "components/**.*.less",
                tasks: ["less:components"]
            }
        }
    });

    grunt.registerTask('dist', ['ngtemplates', 'requirejs']);

};
