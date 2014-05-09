module.exports = function(grunt) {

  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('default', ['clean', 'jshint', 'concat']);


  // Plugin configuration(s).
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['docs/', 'lib/'],
    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', 'lib/**/*.js']
    },
    concat: {
      standard: {
        src: [
          'src/logger_header.tmpl',
          'node_modules/LoggerJS/build/loggerjs.skeleton.js',
          'src/environment/*.js',
          'src/logger_footer.tmpl'
        ],
        dest: 'lib/LoggerJS.js'
      }
    }
  });
};
