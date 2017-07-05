const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
  devtool: 'inline-source-map',

  output: {
    path: helpers.root('dev'),
    publicPath: '',
    filename: '[name].js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index_dev.html'
    }),
    new ExtractTextPlugin({filename: 'css/[name].css', disable: false, allChunks: true}),
    new CopyWebpackPlugin([
      {from: 'src/assets', to: 'assets'},
      {from: 'src/app/crestron-sdk/vendor', to: 'vendor'}
    ])
  ],

  devServer: {
    hot: true,
    inline: true,
    port: 8080
  }
});
