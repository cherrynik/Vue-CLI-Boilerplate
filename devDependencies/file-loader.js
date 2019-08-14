const path = require('path')

module.exports = function() {
  return {
    module: {
      rules: [{
        test: /\.(jp(e?)g|png|gif|svg)$/,
        loaders: 'file-loader',
        include: path.resolve(__dirname, '../src/assets/img/'),
        exclude: [path.resolve(__dirname, '../src/assets/img/icons/')],
        options: {
          outputPath: url => url.slice(url.indexOf(`/assets/img`) + 1),
          name: '[path][name].[ext]',
        }
      }, {
        test: /\.(woff(2?)|eot|(t|o)tf|svg)$/,
        loader: 'file-loader',
        include: path.resolve(__dirname, '../src/assets/fonts/'),
        options: {
          outputPath: url => url.slice(url.indexOf(`/assets/fonts`) + 1),
          name: '[path][name].[ext]'
        }
      }, {
        test: /\.(mov|mp4)$/,
        loader: 'file-loader',
        include: path.resolve(__dirname, '../src/assets/video/'),
        options: {
          outputPath: url => url.slice(url.indexOf(`/assets/video`) + 1),
          name: '[path][name].[ext]'
        }
      }, {
        test: /\.(ogg|mp3|wav|mp(e?)g)$/,
        loader: 'file-loader',
        include: path.resolve(__dirname, '../src/assets/audio/'),
        options: {
          outputPath: url => url.slice(url.indexOf(`/assets/audio`) + 1),
          name: '[path][name].[ext]'
        }
      }]
    }
  }
}