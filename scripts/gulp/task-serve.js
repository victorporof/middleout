// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

import gulp from 'gulp';
import shell from 'gulp-shell';

import * as Paths from '../paths';

gulp.task('serve', shell.task(`
  serve "${Paths.OUTPUT_DIR_PATH}"
`));
