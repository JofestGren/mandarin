module.exports = function () {
  $.gulp.task('libsJS:dev', function () {
    return $.gulp.src(['node_modules/jquery/dist/jquery.min.js',
                        'node_modules/jquery.maskedinput/src/jquery.maskedinput.js',
                        'node_modules/slick-carousel/slick/slick.min.js'])
      .pipe($.gp.concat('libs.min.js'))
      .pipe($.gulp.dest('./build/static/js/'))
      .pipe($.bs.reload({
          stream: true
      }));
  });

  $.gulp.task('libsJS:build', function () {
    return $.gulp.src(['node_modules/jquery/dist/jquery.min.js',
                        'node_modules/jquery.maskedinput/src/jquery.maskedinput.js',
                        'node_modules/slick-carousel/slick/slick.min.js'])
      .pipe($.gp.concat('libs.min.js'))
      .pipe($.gp.uglifyjs())
      .pipe($.gulp.dest('./build/static/js/'));
  });

  $.gulp.task('js:copy', function () {
    return $.gulp.src(['./src/static/js/plugin.js'])
      .pipe($.gp.sourcemaps.init())
      .on('error', $.gp.notify.onError(function(error) {
        return {
            title: 'JavaScript',
            message: error.message
        };
      }))
      .pipe($.gp.sourcemaps.write(''))
      .pipe($.gulp.dest('./build/static/js/'))
      .pipe($.bs.reload({
          stream: true
      }));
  });

  $.gulp.task('js:babel', function () {
    return $.gulp.src(['./src/static/js/*.js',
            '!./src/static/js/libs.min.js',
            '!./src/static/js/plugin.js'])
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.babel({
          presets: ['@babel/env']
      }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
            title: 'JavaScript',
            message: error.message
        };
      }))
      .pipe($.gp.sourcemaps.write(''))
      .pipe($.gulp.dest('./build/static/js/'))
      .pipe($.bs.reload({
          stream: true
      }));
  });

  $.gulp.task('json:copy', function () {
    return $.gulp.src('./src/static/js/data/*.json')
      .pipe($.gulp.dest('./build/static/js/data/'))
      .pipe($.bs.reload({
          stream: true
      }));
  });
}