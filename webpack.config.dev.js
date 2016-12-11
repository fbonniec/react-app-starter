const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './index.js',
  ],
  context: resolve(__dirname, 'web'),
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    hot: true,
    contentBase: resolve(__dirname, 'web'),
    publicPath: '/',
    historyApiFallback: true,
  },
  module: {
    loaders: [
      { test: /\.js$/,
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
}
