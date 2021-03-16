/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const master = require('./webpack.master.config');

const config = merge(master, {
  entry: ['regenerator-runtime/runtime', path.resolve(__dirname, '../source/client.jsx')],
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'app.js',
  },
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    port: 8080,
    disableHostCheck: true,
    // hot: true,
    hotOnly: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          emitFile: true,
        },
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: '/(node_modules)/',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            process.env.NODE_ENV === 'development' && require.resolve('react-refresh/babel'),
          ].filter(Boolean),
        },
      },
    ],
  },
  plugins: [process.env.NODE_ENV === 'development' && new ReactRefreshWebpackPlugin()].filter(
    Boolean
  ),
  target: 'web',
});

module.exports = config;
