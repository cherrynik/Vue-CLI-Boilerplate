module.exports = function() {
  return {
    module: {
      rules: [{
        test: /\.pug$/,
        oneOf: [
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader?pretty=true']
          },
          { use: ['raw-loader', 'pug-plain-loader?pretty=true'] }
        ]
      }]
    }
  }
};