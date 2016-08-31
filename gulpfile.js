var concat = require('gulp-concat');
var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('default', function(){
	gulp.src(['./liveSearch.js'])
	.pipe(concat('liveSearch.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('.'))

});
