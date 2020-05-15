const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const MDXloader = require('@next/mdx')

const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/,
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
  [optimizedImages],
  [MDXloader, {
    pageExtensions: ['js', 'mdx']
  }]
], nextConfig)
