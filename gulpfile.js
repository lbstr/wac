var gulp = require('gulp');
var del = require('del');
var plugins = require('gulp-load-plugins')();

gulp.task('default', ['js', 'vendor-js']);

gulp.task('js', function() {
  return gulp.src([
      'app/**/*module*.js',
      'app/**/*.js',
    ])
    .pipe(plugins.concat('all.js'))
    .pipe(gulp.dest('build/js'));
});

gulp.task('vendor-js', function(){
  return gulp.src([
      'bower_components/angular/angular*.js?(.map)'
    ])
    .pipe(gulp.dest('build/js'));

});

gulp.task('clean', function(){
  return del(['build/']);
});