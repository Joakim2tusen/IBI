const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/IBI/'
    : '/',
  pwa: {
    name: 'Indoor Bonsai International',
    themeColor: '#244a2b',
    msTileColor: '#244a2b',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#244a2b'
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
