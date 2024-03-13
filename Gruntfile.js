module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'dist/css/styles.css': 'src/scss/styles.scss',
        },
      },
    },
    copy: {
      main: {
        files: [
          { expand: true, cwd: 'src/', src: ['index.html'], dest: 'dist/' },
          {
            expand: true,
            cwd: 'src/js/',
            src: ['script.js'],
            dest: 'dist/js/',
          },
        ],
      },
    },
    watch: {
      scripts: {
        files: ['src/js/*.js', 'src/scss/*.scss', 'src/*.html'],
        tasks: ['sass', 'copy'],
        options: {
          spawn: false,
        },
      },
    },
  })

  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default', ['sass', 'copy', 'watch'])
}
