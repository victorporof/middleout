// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

import webpack from 'webpack';

import baseConfigFactory from './webpack.config';

export default (env = {}) => (baseConfig => ({
  ...baseConfig,
  mode: 'development',
  devtool: 'cheap-module-source-map',
  plugins: [
    ...baseConfig.plugins,
    new webpack.NamedModulesPlugin(),
  ],
}))(baseConfigFactory(env));
