var gulp = require('gulp'),
    del = require('del');

var paths = {
    packages: [
        { src: 'node_modules/bootstrap/dist/**/*', dest: 'bootstrap'},
        'node_modules/font-awesome/css/**/*',
        'node_modules/font-awesome/fonts/**/*'],
    output: 'static'
};

gulp.task('copy', function() {
    return gulp.src(paths.packages)
        .pipe(gulp.dest(paths.output));
});

gulp.task('clean', function() {
    return del([paths.output + '/*']);
});

gulp.task('default', ['clean'], function() {
    gulp.start('copy');
});
