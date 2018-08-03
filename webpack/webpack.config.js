// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlInlineSourceWebpackPlugin from 'html-webpack-inline-source-plugin';
import PostCompileWebpackPlugin from 'post-compile-webpack-plugin';
import fs from 'fs-extra';
import gulp from 'gulp';
import once from 'lodash/once';
import promisify from 'pify';

import '../gulpfile.babel';
import * as Config from '../scripts/config';
import * as Paths from '../scripts/paths';

export default () => ({
  entry: [
    Paths.ENTRY_MAIN_FILE_PATH,
  ],
  output: {
    path: Paths.OUTPUT_DIR_PATH,
    filename: Paths.OUTPUT_BUNDLE_FILE_NAME,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          ...Config.BABELRC,
        },
      }],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: Paths.INDEX_TEMPLATE_FILE_PATH,
      inlineSource: '.js',
    }),
    new HtmlInlineSourceWebpackPlugin(),
    new PostCompileWebpackPlugin(once(async () => {
      const built = await fs.pathExists(Paths.GECKO_DEV_OUTPUT_DIR_PATH);
      if (!built) {
        await promisify(gulp.task('build:post'))();
      } else {
        await promisify(gulp.task('mach:run'))();
      }
    })),
  ],
});
