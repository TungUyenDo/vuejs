const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

if (process.env.NODE_ENV === 'production') {
  module.exports = {
    outputDir: 'dist',
    lintOnSave: true,
    configureWebpack: {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          routes: [
            '/',
            '/about',
            '/signup'
          ]
        })
      ]
    }
  }
}
console.log('UyenDo:', process.env.NODE_ENV)
