const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [
    './app/index.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'uiDist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'Electron DEMO',
      template: './index.html'
    })
  ]
}