/* eslint-disable indent */
const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const PATHS = {
  source: path.resolve(__dirname, './src'),
  build: path.resolve(__dirname, './dist'),
};

module.exports = {
  publicPath: './',
  assetsDir: 'assets',

  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    const imgRule = config.module.rule('images');
    const fontRule = config.module.rule('fonts');

    svgRule.uses.clear();
    imgRule.uses.clear();
    fontRule.uses.clear();

    svgRule
      .include
        .add(path.resolve(__dirname, './public/img/icons'))
      .end()
      .use('vue-svg-loader')
        .loader('vue-svg-loader')
        .end()
      .end();

    config.module.rules.delete('svg');

    imgRule
      .test(/\.(jp(e?)g|png|gif|webp)$/)
      .include
        .add(path.resolve('./public/img/'))
      .end()
      .exclude
        .add(path.resolve('./public/img/icons'))
      .end()
      .use('file-loader')
        .loader('file-loader')
          .options({
            outputPath: (url) => url.slice(url.indexOf('/img/') + 1),
            name: '[path][name].[ext]',
          })
        .end()
      .end();

    fontRule
      .test(/\.(woff(2?)|eot|(t|o)tf|svg)$/)
      .include
        .add(path.resolve('./src/assets/fonts/'))
      .end()
      .use('file-loader')
        .loader('file-loader')
          .options({
            outputPath: (url) => url.slice(url.indexOf('/assets/fonts') + 1),
            name: '[path][name].[ext]',
          })
        .end()
      .end();
  },

  configureWebpack: {
    context: __dirname,

    entry: {
      app: `${PATHS.source}/main.js`,
    },

    output: {
      path: PATHS.build,
    },

    performance: {
      hints: false,
    },

    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: 'vendors',
            test: /node_modules/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },

    module: {
      rules: [
        { /* Babel Loader */
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: [/node_modules/],
        },

        { /* Vue SVG Loader */
          test: /icon-.*\.svg$/,
          oneOf: [
            {
              resourceQuery: /inline/,
              loader: 'vue-svg-loader',
            },
            {
              loader: 'file-loader',
              query: { name: 'img/icons/[name].[hash].[ext]' },
            },
          ],
        },
      ],
    },

    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@public': path.resolve(__dirname, 'public'),
      },
      extensions: ['*', '.js', '.vue', '.json'],
    },

    plugins: [
      new StyleLintPlugin({
        configFile: './.stylelintrc.json',
        files: ['./src/**/*.{vue,css,scss,sass}'],
        syntax: 'scss',
      }),
    ],
  },

  css: {
    sourceMap: process.env.NODE_ENV !== 'production',
  },
  runtimeCompiler: true,
};
