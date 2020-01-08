const gulp = require('gulp');
const image = require('gulp-image');
 
gulp.task('image', function () {
  gulp.src('./images/**')
    .pipe(image())
    .pipe(gulp.dest('./dest'));
});
