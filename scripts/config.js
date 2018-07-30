// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

import path from 'path';
import fs from 'fs-extra';

import * as Paths from './paths';

// Paths
export const BABELRC_CONFIG_PATH = path.join(Paths.ROOT_DIR_PATH, '.babelrc');
export const WEBPACK_CONFIG_DEV_PATH = path.join(Paths.WEBPACK_DIR_PATH, 'webpack.config-dev.babel.js');
export const WEBPACK_CONFIG_PROD_PATH = path.join(Paths.WEBPACK_DIR_PATH, 'webpack.config-prod.babel.js');

// Configs
export const BABELRC = fs.readJsonSync(BABELRC_CONFIG_PATH);
export const JAR_INCLUDE = '        content/browser/middleout.html (content/middleout/index.html)';
