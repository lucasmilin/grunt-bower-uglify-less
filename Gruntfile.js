module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower: {
      install: {
        options: {
          targetDir: 'bower_components',
          layout: 'byType',
          install: true,
          verbose: true,
          cleanTargetDir: true,
        },

      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      my_target: {
        files: {
          'web/js/min/test.jquery.js': ['web/js/src/test1.jquery.js', 'web/js/src/test2.jquery.js']
        }
      }
    },
    less: {
      development: {
        files: {
          "web/css/style.css": "web/less/style.less"
        }
      }
    },
    bowercopy: {
      options: {
          srcPrefix: 'bower_components'
      },
      scripts: {
        options: {
            destPrefix: 'web/js/vendor'
        },
        files: {
            'jquery.min.js': 'jquery/dist/jquery.min.js'
        }
    },
  }

  });

  // Load the plugin that provides the "bower" task.
  grunt.loadNpmTasks('grunt-bower-task');

  // Load the plugin that provides the "bowercopy" task.
  grunt.loadNpmTasks('grunt-bowercopy');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the "less" task.
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('default', ['bower', 'bowercopy', 'uglify', 'less']);

};
