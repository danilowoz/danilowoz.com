const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })

module.exports = withMDX({
  pageExtensions: ['tsx', 'mdx'],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            replaceAttrValues: { '#000': 'currentColor' },
          },
        },
      ],
    })

    return config
  },
})
