const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = function() {
  return {
    output: {
      path: path.join(__dirname, '../dist'),
    },
    plugins: [
      new CleanWebpackPlugin()
    ]
  }
};