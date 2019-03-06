'use strict';
var gulp = require('gulp');
var cachebust = require('gulp-cache-bust');



gulp.task('default',function()
{
    var stream = gulp.src(['./dist/**/*.html','./dist/**/*.js'])
	.pipe(cachebust({
		type: 'timestamp'
	}))
	.pipe(gulp.dest('./dist2'));
	return stream;
});