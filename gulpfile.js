const gulp = require('gulp');
const image = require('gulp-image');
const jsonminify = require('gulp-jsonminify');

gulp.task('image', () => {
  return gulp.src('./images/**')
    .pipe(image())
    .pipe(gulp.dest('./dist/images'));
});

gulp.task('jsonminify', () => {
  return gulp.src(['./data/**/*.json', '!data/compress/**'])
    .pipe(jsonminify())
    .pipe(gulp.dest('./data/compress'));
});
