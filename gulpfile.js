var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('sass', function () {
    gulp.src('./public/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css'));
});


gulp.task('watch', function() {
  gulp.watch('./public/css/*.scss', ['sass'])
});
