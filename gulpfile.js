'use strict';
var gulp = require('gulp');
var karma = require('gulp-karma');
var config = {
  configFile: './karma.conf.js',
  paths: ['./scripts/**/*.js', './test/**/*Spec.js']
};


gulp.task('test', function () {
  return gulp.src(config.paths)
    .pipe(karma({
      configFile: config.configFile,
      action: 'run'
    }))
    .on('error', function (error) {
      throw error;
    });
});

gulp.task('default', function () {
  return gulp.src(config.paths)
    .pipe(karma({
      configFile: config.configFile,
      action: 'watch'
    }));
});