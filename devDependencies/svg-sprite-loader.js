const SvgSpritePlugin = require('svg-sprite-loader/plugin');
const path = require('path');

// /\/icon-.*\.svg$/
// exclude: [/assets\/img\/icon-.*\.svg$/],
// exclude: [path.resolve(__dirname, '/src/assets/img/icon-')],
// resource: { exclude: [path.resolve(__dirname, '../src/assets/img/icons/')] },

module.exports =  function () {
  return {
    module: {
      rules: [
        {
          test: /\.svg$/,
          include: path.resolve(__dirname, '../src/assets/img/icons/'),
          oneOf: [
            {
              issuer: { exclude: [/\.(s(a|c)|c)ss$/], not: [/\.(s(a|c)|c)ss$/] },
              use: [
                {
                  loader: 'svg-sprite-loader',
                  options: {
                    extract: false
                  }
                },
                {
                  loader: 'svgo-loader',
                  options: {
                    plugins: [
                      { removeTitle: true },
                      { convertColors: { shorthex: false } },
                      { convertPathData: false }
                    ]
                  }
                },
              ],
            }, {
              issuer: { include: [/\.(s(a|c)|c)ss$/, /\.pug$/] },
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    outputPath: url => url.slice(url.indexOf(`/assets/img`) + 1),
                    name: '[path][name].[ext]',
                  }
                },
                {
                  loader: 'svgo-loader',
                  options: {
                    plugins: [
                      { removeTitle: true },
                      { convertColors: { shorthex: false } },
                      { convertPathData: false }
                    ]
                  }
                },
              ],
            },
          ],
        },
      ],
    },
    plugins: [ new SvgSpritePlugin() ]
  }
};