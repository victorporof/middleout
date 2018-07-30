// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

import webpack from 'webpack';

import baseConfigFactory from './webpack.config';

export default (env = {}) => (baseConfig => ({
  ...baseConfig,
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    ...baseConfig.plugins,
    new webpack.HashedModuleIdsPlugin(),
  ],
}))(baseConfigFactory(env));
