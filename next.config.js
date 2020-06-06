const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')
const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })

const config = {
  pageExtensions: ['tsx', 'mdx'],
  devIndicators: { autoPrerender: false },
}

module.exports = withPlugins([withMDX, withImages], config)
