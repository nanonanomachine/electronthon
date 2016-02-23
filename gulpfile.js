var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('compile', ['compile-babel', 'compile-haml', 'dest-css']);

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

gulp.task('dest-css', function(){
  return gulp.src("static/**/*.css")
    .pipe(gulp.dest('app'));
})

gulp.task('start', ['compile'], function(){
  gulp.watch('src/**/*', ['compile-babel']); 
  gulp.watch('static/**/*.haml', ['compile-haml']); 
  gulp.watch('static/**/*.css', ['dest-css']); 
})
