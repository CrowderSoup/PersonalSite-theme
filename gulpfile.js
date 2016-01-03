var gulp = require('gulp'),
    del = require('del');

var paths = {
    packages: [
        { src: 'node_modules/bootstrap/dist/**/*', dest: 'bootstrap' },
        { src: 'node_modules/font-awesome/css/**/*', dest: 'font-awesome/css' },
        { src: 'node_modules/font-awesome/fonts/**/*', dest: 'font-awesome/fonts' }],
    output: 'static/'
};

gulp.task('copy', function() {
    for(var i = 0; i < paths.packages.length; i++) {
        var package = paths.packages[i];
        gulp.src(package.src)
            .pipe(gulp.dest(paths.output + package.dest));
    }
});

gulp.task('clean', function() {
    return del([paths.output + '/*']);
});

gulp.task('default', ['clean'], function() {
    gulp.start('copy');
});
