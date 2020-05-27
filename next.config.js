const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
const withCSS = require('@zeit/next-css')

module.exports = withMDX(
  withCSS({
    cssModules: true,
    pageExtensions: ['tsx', 'mdx'],
  })
)
