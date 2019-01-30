'use strict';
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  mode: 'development',
  target: 'electron-renderer',
  entry: {
    bundle: ['./script/script.js']
  },
  output: {
    path: __dirname + '/dist/camunda-modeler-test-plugin',
    filename: 'script/script-bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './index.js', to: '.' },
      { from: './assets', to: './assets' },
      { from: './menu', to: './menu' },
      { from: './style', to: './style' }
    ])
  ],
  devtool: 'source-map'
};
