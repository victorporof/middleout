// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

import gulp from 'gulp';
import shell from 'gulp-shell';

import argv from '../argv';
import * as Config from '../config';
import * as Paths from '../paths';

gulp.task('build:webpack:dev', shell.task(`
  webpack\
    --gecko-path ${argv.geckoPath}\
    --frontend ${argv.frontend}\
    --config ${Config.WEBPACK_CONFIG_DEV_PATH}\
    ${argv.progress ? '--progress' : ''}\
    ${argv.watch ? '--watch' : ''}
`));

gulp.task('build:webpack:prod', shell.task(`
  webpack\
    --gecko-path ${argv.geckoPath}\
    --frontend ${argv.frontend}\
    --config ${Config.WEBPACK_CONFIG_PROD_PATH}\
    ${argv.progress ? '--progress' : ''}
`));

gulp.task('build:gecko-dev:link', shell.task(`
  ln -s "${Paths.OUTPUT_DIR_PATH}" "${Paths.GECKO_DEV_OUTPUT_DIR_PATH}"
`, {
  ignoreErrors: true,
}));

gulp.task('build:gecko-dev:jar', shell.task(`
  grep -qF "${Config.JAR_INCLUDE}" "${Paths.BROWSER_JAR_FILE_PATH}"\
  || echo "${Config.JAR_INCLUDE}" >> "${Paths.BROWSER_JAR_FILE_PATH}"
`));

gulp.task('build:post', gulp.series(
  'build:gecko-dev:link',
  'build:gecko-dev:jar',
  'mach:build',
  'mach:run',
));
