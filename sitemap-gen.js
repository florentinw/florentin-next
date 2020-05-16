const sitemap = require('nextjs-sitemap-generator')

sitemap({
  baseUrl: 'https://florentin.design',
  pagesDirectory: `${__dirname}\\pages`,
  targetDirectory: 'public/',
  nextConfigPath: `${__dirname}\\next.config.js`
})

console.log('✅ sitemap.xml generated!')
