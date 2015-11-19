'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var path = require('path');

// Start local dev server.
gulp.task('connect', function() {
  connect.server({
    root: path.resolve(global.paths.src),
    port: 12345,
    livereload: true
  });
});

gulp.task('connect-build', function() {
  connect.server({
    root: global.paths.dist,
    livereload: true
  });
});
