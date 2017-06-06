const { env, publicPath } = require('../configuration.js')

module.exports = {
  test: /\.(jpg|jpeg|png|gif|svg|eot|ttf|woff|woff2)$/i,
  use: [{
    loader: 'file-loader',
    options: {
      publicPath,
      context: 'app/javascript',
      emitFiles: true,
      name: env.NODE_ENV === 'production' ? '[path]/[name]-[hash].[ext]' : '[path]/[name].[ext]'
    }
  }]
}
