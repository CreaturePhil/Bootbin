var jshint = require('gulp-jshint');
var gulp = require('gulp');

gulp.task('lint', function() {
  return gulp.src(['*.js', 'app/**/*.js', 'config/*.js', 'test/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});
