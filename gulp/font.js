'use strict';

var gulp = require('gulp');

gulp.task('fonts', function () {
  return gulp.src([
    global.IONIC_DIR + 'fonts/**/*.ttf',
    global.IONIC_DIR + 'fonts/**/*.woff'
  ])
    .pipe(gulp.dest(global.paths.fonts));
});