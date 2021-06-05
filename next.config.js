module.exports = {
  async rewrites() {
    return [
      {
        source: '/notion/:path*',
        destination: 'https://p.florentin.design/:path*',
      },
    ]
  },
}
