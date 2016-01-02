var gulp = require('gulp');

var paths = {
    packages: ['node_modules/bootstrap/dist/**/*']
};

gulp.task('copy', function(){
    return gulp.src(paths.packages)
        .pipe(gulp.dest('static/packages'));
});

gulp.task('default', ['copy']);
