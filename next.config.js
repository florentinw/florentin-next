module.exports = {
  async rewrites() {
    return [
      {
        source: '/notion/:path*',
        destination: 'https://portfolio.florentin.co/:path*',
      },
    ]
  },
}
