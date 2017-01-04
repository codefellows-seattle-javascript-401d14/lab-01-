'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('test', function(){
  gulp.src('test/**/*.js', {read: false})
        .pipe(mocha({reporter: 'landing'}));
});

gulp.task('lint', () => {
  return gulp.src(['**/*.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
 
gulp.task('dev', ['lint' , 'test']);

gulp.task('default', ['dev']);