const gulp = require('gulp');

const { bundle } = require('@ngx-devtools/bundle');
const { rimraf } = require('@ngx-devtools/common');

gulp.task('bundle', async (done) => {
  await Promise.all([ rimraf('dist'), rimraf('.tmp') ])
    .then(() => bundle())
    .then(() => rimraf('.tmp'));
});