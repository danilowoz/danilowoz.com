const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const createNode = ({ node, actions: { createNodeField }, getNode }) => {
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: 'slug',
      node,
      value,
    })

    createNodeField({
      name: 'published',
      node,
      value: node.frontmatter.published,
    })
  }
}

const createPosts = ({
  graphql,
  actions: { createPage },
  reporter,
  pathPrefix,
}) => {
  return graphql(
    `
      {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              fields {
                slug
                published
              }
              timeToRead
              frontmatter {
                title
                description
                categories
                date(formatString: "MMMM DD, YYYY")
                canonicalLink
                cover {
                  childImageSharp {
                    fluid(maxWidth: 500, maxHeight: 300, cropFocus: CENTER) {
                      aspectRatio
                      src
                      srcSet
                      sizes
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors && result.errors.length) {
      if (result.errors.length === 1) {
        throw new Error(result.errors[0])
      }

      result.errors.forEach(error => {
        reporter.error('Error while querying the mdx', error)
      })

      throw new Error('See errors above')
    }

    const posts = result.data.allMdx.edges

    posts.forEach(({ node }, index, arr) => {
      createPage({
        path: `${pathPrefix}${node.fields.slug}`,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: { id: node.id, allPosts: arr },
      })
    })
  })
}

module.exports = { createPosts, createNode }
