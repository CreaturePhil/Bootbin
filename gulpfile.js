var jshint = require('gulp-jshint');
var gulp = require('gulp');
var jscs = require('gulp-jscs');

var files = ['*.js', 'app/**/*.js', 'config/*.js', 'test/*.js'];

gulp.task('lint', function() {
  return gulp.src(files)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('style', function() {
  return gulp.src(files)
    .pipe(jscs())
    .pipe(jscs.reporter());
});

gulp.task('default', ['lint', 'style']);
