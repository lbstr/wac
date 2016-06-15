var gulp = require('gulp');
var del = require('del');
var addStream = require('add-stream');
var plugins = require('gulp-load-plugins')();

gulp.task('default', ['js', 'vendor-js']);

gulp.task('js', function() {
  var processTemplates = function() {
    return gulp.src([
        'client/**/*.html'
      ])
      .pipe(plugins.angularTemplatecache());
  };

  return gulp.src([
      'client/**/*module*.js',
      'client/**/*.js',
    ])
    .pipe(addStream.obj(processTemplates()))
    .pipe(plugins.concat('all.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('vendor-js', function(){
  return gulp.src([
      'client/bower_components/angular/angular*.js?(.map)'
    ])
    .pipe(gulp.dest('public/js'));

});

gulp.task('clean', function(){
  return del(['public/js']);
});