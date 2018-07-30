// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

import path from 'path';

import argv from './argv';

// Project directories
export const ROOT_DIR_PATH = path.join(__dirname, '..');
export const STATIC_DIR_PATH = path.join(ROOT_DIR_PATH, 'static');
export const WEBPACK_DIR_PATH = path.join(ROOT_DIR_PATH, 'webpack');
export const ENTRY_DIR_PATH = path.join(ROOT_DIR_PATH, 'src');
export const OUTPUT_DIR_PATH = path.join(ROOT_DIR_PATH, 'dist');

// Gecko dev directories
export const GECKO_DEV_DIR_PATH = path.join(ROOT_DIR_PATH, argv.geckoPath);
export const GECKO_DEV_BROWSER_DIR_PATH = path.join(GECKO_DEV_DIR_PATH, 'browser', 'base');
export const GECKO_DEV_OUTPUT_DIR_PATH = path.join(GECKO_DEV_BROWSER_DIR_PATH, 'content', 'middleout');

// Project files
export const FRONTEND_PATH = path.join(ENTRY_DIR_PATH, 'frontends', argv.frontend);
export const ENTRY_MAIN_FILE_PATH = path.join(FRONTEND_PATH, 'index.js');
export const OUTPUT_BUNDLE_FILE_NAME = 'bundle.js';
export const INDEX_TEMPLATE_FILE_PATH = path.join(STATIC_DIR_PATH, 'index.html');

// Gecko dev files
export const MACH = path.join(GECKO_DEV_DIR_PATH, 'mach');
export const BROWSER_JAR_FILE_PATH = path.join(GECKO_DEV_BROWSER_DIR_PATH, 'jar.mn');
