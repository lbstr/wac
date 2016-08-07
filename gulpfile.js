var gulp = require('gulp');
var del = require('del');
var addStream = require('add-stream');
var runSequence = require('run-sequence');
var plugins = require('gulp-load-plugins')();

gulp.task('default', function(){
  return runSequence('build', 'watch');
});

gulp.task('build', function(){
  return runSequence('clean', ['js', 'css', 'img']);
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

  gulp.watch('client/img/**/*', function(e){
    console.log("File %s was %s; running img tasks...", e.path, e.type);
    return runSequence('clean-img', 'img');
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

gulp.task('img', function() {
  return gulp.src('client/img/**/*')
    .pipe(gulp.dest('public/img'))
});

gulp.task('clean', ['clean-js', 'clean-css', 'clean-img']);

gulp.task('clean-js', function(){
  return del(['public/js']);
});

gulp.task('clean-css', function(){
  return del(['public/css']);
});

gulp.task('clean-img', function(){
  return del(['public/img']);
});