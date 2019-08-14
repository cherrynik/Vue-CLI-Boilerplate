const path = require('path');
const merge = require('webpack-merge');
const fs = require('fs');
const DevServer = require('./devDependencies/devServer')
const BabelLoader = require('./devDependencies/babel-loader');
const MiniCssExtract = require('./devDependencies/mini-css-extract-plugin');
const SourceMapDevTool = require('./devDependencies/SourceMapDevTool');
const FileLoader = require('./devDependencies/file-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PugLoader = require('./devDependencies/pug-loader');
const SvgSpriteLoader = require('./devDependencies/svg-sprite-loader');
const VueLoader = require('./devDependencies/vue-loader');
const CleanWebpackPlugin = require('./devDependencies/clean-webpack-plugin');

const PATHS = {
  source: path.join(__dirname, './src'),
  build: path.join(__dirname, './dist')
};

const PAGES_DIR = `${PATHS.source}/pages/`;
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

const common = merge([
  {
    context: __dirname,
    entry: {
      app: `${PATHS.source}/app.js`,
      icons: `${PATHS.source}/icons.js`
    },
    output: {
      filename: 'assets/js/[name].[hash].js',
      path: PATHS.build,
      publicPath: '/'
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: 'vendors',
            test: /node_modules/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    // plugins: [
    //   ...PAGES.map(page => new HtmlWebpackPlugin({
    //     template: `${PAGES_DIR}/${page}`,
    //     filename: `./${page.replace(/\.pug/,'.html')}`,
    //   }))
    // ]
    plugins: [
      new HtmlWebpackPlugin({
        template: `./src/pages/index.pug`,
        filename: 'index.html',
      })
    ]
  },
  VueLoader(),
  BabelLoader(),
  PugLoader(),
  MiniCssExtract(),
  FileLoader(),
  SvgSpriteLoader(),
]);

module.exports = function(env, argv) {
  if (argv.mode === 'production') {
    return merge([
      common,
      CleanWebpackPlugin(),
    ]);
  }
  if (argv.mode === 'development') {
    return merge([
      common,
      DevServer(),
      SourceMapDevTool(),
    ]);
  }
};