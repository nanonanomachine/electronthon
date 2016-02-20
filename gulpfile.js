var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('compile', ['compile-babel', 'compile-haml']);

gulp.task('compile-babel', function(){
  return gulp.src('src/**/*.js')
    .pipe($.babel({
        presets:['es2015']
     }))
    .pipe(gulp.dest('app'));
 });

gulp.task('compile-haml', function(){
  return gulp.src("static/**/*.haml")
    .pipe($.haml())
    .pipe(gulp.dest('app'));
})
