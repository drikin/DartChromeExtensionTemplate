module.exports = function(grunt) {
  grunt.initConfig({
    dart2js: {
      options: {
        dart2js_bin: "/Users/koh/Dropbox/dart-sdk/bin/dart2js"
      },
      compile: {
        files: {
          './extension/background.dart.js': "./background.dart",
        }
      }
    },
    watch: {
      files: './src/background.dart',
      tasks: ['dart2js'],
    },
  });

  grunt.loadNpmTasks('grunt-dart2js');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['dart2js', 'watch']);
};
