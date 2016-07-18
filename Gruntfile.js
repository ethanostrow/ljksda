     module.exports = function (grunt) {
       grunt.initConfig({

         less: {
           development: {
             options: {
               paths: ["assets/css"]
             },
             files: {
               "css/main.css": "less/main.less"
             }
           },
           production: {
             options: {
               paths: ["assets/css"],
               cleancss: true
             },
             files: {
               "css/main.css": "less/main.less"
             }
           }
         }
       });
       grunt.loadNpmTasks('grunt-contrib-less');
       grunt.registerTask('default', ['less']);
     };