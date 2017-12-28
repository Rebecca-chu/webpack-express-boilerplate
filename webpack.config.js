const path = require('path');

module.exports = {
  entry: './src/javascripts/startup/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
