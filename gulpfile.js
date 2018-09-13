const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

gulp.task('minifica-css', () => {
  return gulp
  .src('./src/*.css')
  .pipe(cleanCSS())
  .pipe(gulp.dest('dist/'))
})
