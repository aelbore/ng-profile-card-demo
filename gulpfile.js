const gulp = require('gulp');

const { bundle, rimraf } = require('ngx-bundle');

gulp.task('bundle', async (done) => {
  await Promise.all([ rimraf('dist'), rimraf('.tmp') ])
    .then(() => bundle())
    .then(() => rimraf('.tmp'));
});