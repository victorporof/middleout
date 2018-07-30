// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

import temp from 'temp';
import gulp from 'gulp';
import shell from 'gulp-shell';

import * as Config from '../config';
import * as Paths from '../paths';

gulp.task('clean:dist:local', shell.task(`
  rm -r "${Paths.OUTPUT_DIR_PATH}"
`, {
  ignoreErrors: true,
}));

gulp.task('clean:gecko-dev:link', shell.task(`
  rm -r "${Paths.GECKO_DEV_OUTPUT_DIR_PATH}"
`, {
  ignoreErrors: true,
}));

gulp.task('clean:gecko-dev:jar', shell.task(`
  TEMP=${temp.path()};
  grep -vF "${Config.JAR_INCLUDE}" "${Paths.BROWSER_JAR_FILE_PATH}" > $TEMP\
  && mv $TEMP "${Paths.BROWSER_JAR_FILE_PATH}"
`));

gulp.task('clean', gulp.series(
  'clean:dist:local',
  'clean:gecko-dev:link',
  'clean:gecko-dev:jar',
));
