module.exports = function () {
  $.gulp.task('serve', function () {
    $.bs.init({
      server: './build'
    });
  });
};