// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlInlineSourceWebpackPlugin from 'html-webpack-inline-source-plugin';
import PostCompileWebpackPlugin from 'post-compile-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import gulp from 'gulp';
import once from 'lodash/once';
import p from 'pify';

import '../gulpfile.babel';
import argv from '../scripts/argv';
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
    }, {
      test: /\.vue$/,
      exclude: /node_modules/,
      use: 'vue-loader',
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
        options: {
          sourceMap: true,
        },
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          modules: true,
          importLoaders: 1,
          localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
        },
      }],
    }],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: Paths.INDEX_TEMPLATE_FILE_PATH,
      inlineSource: '.js',
    }),
    new HtmlInlineSourceWebpackPlugin(),
    new PostCompileWebpackPlugin(once(async () => {
      if (argv.serve) {
        return p(gulp.task('serve'))();
      }
      if (argv.run) {
        if (!Config.GECKO_DEV_OUTPUT_DIR_EXISTS) {
          await p(gulp.task('build:post-run'))();
        } else {
          await p(gulp.task('mach:run'))();
        }
      }
    })),
  ],
});
