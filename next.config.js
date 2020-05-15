const withMDX = require('@next/mdx')()

module.exports = withMDX({
  pageExtensions: ['js', 'mdx'],
  webpack (config, options) {
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
})
