const { env, publicPath } = require('../configuration.js')

module.exports = {
  test: /images/i,
  use: [{
    loader: 'file-loader',
    options: {
      publicPath,
      outputPath: 'images/',
      name: env.NODE_ENV === 'production' ? '[name]-[hash].[ext]' : '[name].[ext]'
    }
  }]
}
