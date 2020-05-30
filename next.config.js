const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
const withCSS = require('@zeit/next-css')

module.exports = withMDX(
  withCSS({
    cssModules: true,
    pageExtensions: ['tsx', 'mdx'],
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]-[hash:base64:2]',
    },
  })
)
