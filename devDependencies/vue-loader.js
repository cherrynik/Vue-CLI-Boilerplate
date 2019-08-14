const { VueLoaderPlugin } = require('vue-loader');

module.exports = function() {
  return {
    module: {
      rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loader: {
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      }]
    },
    plugins: [ new VueLoaderPlugin() ],
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.js'
      }
    }
  }
};