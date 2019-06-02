const mdxFeed = require('gatsby-mdx/feed')

const siteConfig = require('./content/site-config')

module.exports = {
  siteMetadata: siteConfig,
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
        head: false,
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              backgroundColor: 'transparent',
              showCaptions: true,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-embed-video',
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-smartypants',
          {
            resolve: '@weknow/gatsby-remark-twitter',
            options: {
              align: 'center',
            },
          },
          'gatsby-remark-external-links',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteConfig.title,
        short_name: siteConfig.shortName,
        start_url: `/`,
        background_color: siteConfig.themeColor,
        theme_color: siteConfig.themeColor,
        display: `minimal-ui`,
        icon: siteConfig.logo,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: mdxFeed,
    },
  ],
}
