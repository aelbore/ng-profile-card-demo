const gulp = require('gulp');

const { bundle, rimraf } = require('@ngx-devtools/bundle');

gulp.task('bundle', async (done) => {
  await Promise.all([ rimraf('dist'), rimraf('.tmp') ])
    .then(() => bundle())
    .then(() => rimraf('.tmp'));
});