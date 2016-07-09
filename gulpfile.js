var gulp = require('gulp');
var del = require('del');
var addStream = require('add-stream');
var plugins = require('gulp-load-plugins')();

gulp.task('default', ['js', 'css']);

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

gulp.task('css', function(){
  return gulp.src('client/styles/**/*.scss')
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.concat('all.min.css'))
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest('public/css'));
});

gulp.task('clean', function(){
  return del(['public/js', 'public/css']);
});