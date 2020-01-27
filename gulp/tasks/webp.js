module.exports = function () {
    $.gulp.task('webp', () => {
        return $.gulp.src('img/**/*.{jpg,png}')
            .pipe($.gp.webp({quality: 90}))
            .pipe($.gulp.dest('build/img'))
    })
};