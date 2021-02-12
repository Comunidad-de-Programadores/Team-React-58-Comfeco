/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { merge } = require('webpack-merge');
const master = require('./webpack.master.config');

const config = merge(master, {
  entry: ['regenerator-runtime/runtime', path.resolve(__dirname, '../source/server/index.jsx')],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'server.js',
    libraryTarget: 'commonjs',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          emitFile: false,
        },
      },
    ],
  },
  target: 'node',
});

module.exports = config;
