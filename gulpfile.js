global.$ = {
  path: {
      task: require('./gulp/config/tasks.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  fs: require('fs'),
  bs: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
  'clean',
  $.gulp.parallel('stylus:dev', 'pug', 'libsJS:dev', 'js:copy', 'js:babel', 'json:copy', 'svg', 'img:dev', 'fonts','svg:copy', 'video')));

$.gulp.task('build', $.gulp.series(
  'clean',
  $.gulp.parallel('stylus:build', 'pug', 'libsJS:build', 'js:copy', 'js:babel', 'json:copy', 'svg', 'img:build', 'fonts','svg:copy', 'video')));

$.gulp.task('default', $.gulp.series(
  'dev',
  $.gulp.parallel(
      'watch',
      'serve'
  )
));