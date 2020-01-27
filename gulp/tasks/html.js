module.exports = function () {
    $.gulp.task('html', () => {
        return $.gulp.src('*.html')
            .pipe($.gulp.dest('build'))
            .on('end', $.browserSync.reload)
    })
};