var gulp = require('gulp');
var del = require('del');
var addStream = require('add-stream');
var plugins = require('gulp-load-plugins')();

gulp.task('default', ['js']);

gulp.task('js', function() {
  var processTemplates = function() {
    return gulp.src([
        'client/**/*.html'
      ])
      .pipe(plugins.angularTemplatecache());
  };

  return gulp.src([
      'bower_components/angular/angular.js',
      'client/**/*module*.js',
      'client/**/*.js',
    ])
    .pipe(addStream.obj(processTemplates()))
    .pipe(plugins.concat('all.min.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('public/js'));
});

gulp.task('clean', function(){
  return del(['public/js']);
});