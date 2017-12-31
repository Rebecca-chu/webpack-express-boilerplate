const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/javascripts/startup/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$|\.jsx$/,
      exclude: /node_modules/,
      enforce: 'pre',
      loader: 'eslint-loader'
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public/index.html') })
  ],
  devServer: {
    contentBase: './public'
  }
};
