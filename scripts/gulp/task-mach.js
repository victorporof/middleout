// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

import gulp from 'gulp';
import shell from 'gulp-shell';

import { MACH } from '../paths';

gulp.task('mach:build', shell.task(`
  ${MACH} build
`));

gulp.task('mach:run', shell.task(`
  ${MACH} run --chrome chrome://browser/content/middleout.html --jsconsole > /dev/null 2>&1
`));
