const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const debug = process.env.NODE_ENV !== 'production';

const config = {
  entry: {
    app: './src/javascripts/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
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
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') }),
    new ExtractTextPlugin({ filename: "[name].css" })
  ],
  devServer: {
    contentBase: './dist'
  }
};

if (!debug) {
  config.plugins.push(new UglifyJSPlugin());
}

module.exports = config;
