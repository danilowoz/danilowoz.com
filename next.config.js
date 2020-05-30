const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')

const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
const withCSS = require('@zeit/next-css')

const config = {
  cssModules: true,
  pageExtensions: ['tsx', 'mdx'],
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]',
  },
  devIndicators: {
    autoPrerender: false,
  },
}

module.exports = withPlugins([withMDX, withCSS, withImages], config)
