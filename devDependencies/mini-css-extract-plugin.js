const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV === 'development';

module.exports = function() {
  return {
    module: {
      rules: [{
        test: /\.(s(a|c)|c)ss$/,
        use: [
          devMode ? 'vue-style-loader' : {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '/' }
          }, {
            loader: 'css-loader',
            options: { sourceMap: true, }
          }, {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: 'postcss.config.js' } }
          }, {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      }],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: `assets/css/[name].[hash].css`
      }),
    ]
  }
}