const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const env = process.env.NODE_ENV;

const configMaster = {
  optimization: {
    minimize: env === 'production',
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
  output: {
    publicPath:
      env === 'production'
        ? 'https://comunidad-fest.vercel.app/public/'
        : 'http://localhost:8080/public/',
  },
  mode: env,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: '/(node_modules)/',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: 'styles.css' })],
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
    alias: {
      app: path.resolve(__dirname, '../source/app'),
    },
  },
  watch: env === 'development',
};

module.exports = configMaster;
