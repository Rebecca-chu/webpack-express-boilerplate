const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
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
    },
    {
      test: /\.(s*)css$/,
      exclude: /node_modules/,
      use: ExtractTextPlugin.extract({
        fallback:'style-loader',
        use:['css-loader','sass-loader'],
      })
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public/index.html') }),
    new ExtractTextPlugin({ filename: "bundle.css" })
  ],
  devServer: {
    contentBase: './public'
  }
};
