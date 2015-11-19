'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var typescript = require('gulp-typescript');


var tsProject = typescript.createProject('tsconfig.json');

gulp.task('ts', function () {
  gulp.src(global.paths.ts)
    .pipe(sourcemaps.init())
    .pipe(typescript(tsProject))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('www'));
});