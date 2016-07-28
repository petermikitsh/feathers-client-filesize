const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './entry.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false
      }
    }),
    new CompressionPlugin({
      asset: '[path].gz',
      algorithm: 'gzip',
      test: /\.jsx?$|\.css$/,
      minRatio: 1.0
    })
  ],
  resolve: {
    extensions: ['', '.js']
  }
};
