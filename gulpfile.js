var gulp = require('gulp');
var del = require('del');
var addStream = require('add-stream');
var runSequence = require('run-sequence');
var plugins = require('gulp-load-plugins')();

gulp.task('default', function(){
  return runSequence('clean', ['js', 'css'], 'watch');
});

gulp.task('watch', function(){
  gulp.watch('client/**/*.@(js|html)', function(e){
    console.log("File %s was %s; running js tasks...", e.path, e.type);
    return runSequence('clean-js', 'js');
  });

  gulp.watch('client/**/*.scss', function(e){
    console.log("File %s was %s; running css tasks...", e.path, e.type);
    return runSequence('clean-css', 'css');
  });

  console.log('Watching...');
});

gulp.task('js', function() {
  var processTemplates = function() {
    return gulp.src([
        'client/**/*.html'
      ])
      .pipe(plugins.angularTemplatecache());
  };

  return gulp.src([
      'bower_components/angular/angular.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'client/**/*module*.js',
      'client/**/*.js',
    ])
    .pipe(addStream.obj(processTemplates()))
    .pipe(plugins.concat('all.min.js'))
    //.pipe(plugins.ngAnnotate())
    //.pipe(plugins.uglify())
    .pipe(gulp.dest('public/js'));
});

gulp.task('css', function(){
  return gulp.src('client/styles/**/*.scss')
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.concat('all.min.css'))
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest('public/css'));
});

gulp.task('clean', ['clean-js', 'clean-css']);

gulp.task('clean-js', function(){
  return del(['public/js']);
});

gulp.task('clean-css', function(){
  return del(['public/css']);
});