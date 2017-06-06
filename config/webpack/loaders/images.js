const { env, publicPath } = require('../configuration.js')

module.exports = {
  test: /images/i,
  use: [{
    loader: 'file-loader',
    options: {
      publicPath,
      // outputPath: 'images/',
      name: env.NODE_ENV === 'production' ? '[folder]/[name]-[hash].[ext]' : '[folder]/[name].[ext]'
    }
  }]
}
