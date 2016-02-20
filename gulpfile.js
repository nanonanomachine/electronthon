var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('compile', function(){
  return gulp.src('src/**/*.js')
    .pipe($.babel({
        presets:['es2015']
     }))
    .pipe(gulp.dest('build'));
 });
