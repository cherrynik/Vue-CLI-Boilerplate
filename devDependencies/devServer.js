const path = require('path');

module.exports = function() {
  return {
    devServer: {
      contentBase: path.join(__dirname, '../src'),
      stats: {
        warnings: false
      },
      overlay: {
        warnings: false,
        errors: true
      },
      port: 8081
    }
  };
};