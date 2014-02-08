var gulp = require('gulp'),
	debug = require('gulp-debug'),
	plumber = require('gulp-plumber'),
	watch = require('gulp-watch'),
	lazypipe = require('lazypipe');

var pipeline = lazypipe().pipe(plumber).pipe(debug);

gulp.task('default', function() {
	watch({glob: 'src/**/*'}).pipe(pipeline()).pipe(debug()).pipe(gulp.dest('build')).pipe(debug());
});