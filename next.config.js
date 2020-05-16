const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    })
    return config
  }
}

module.exports = withPlugins([
  [optimizedImages]
], nextConfig)
