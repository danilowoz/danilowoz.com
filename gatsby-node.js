const Promise = require(`bluebird`)
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const axios = require('axios')
const Instagram = require('node-instagram').default

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.sourceNodes = ({
  actions,
  getNodesByType,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions
  const data = getNodesByType('HomeSectionsYaml')
  const openSourceProject = data[0].openSourceProject

  const instagram = new Instagram({
    clientId: process.env.INSTAGRAM_CLIENT_ID,
    clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
  })

  const sourceFromInstagram = new Promise(resolve => {
    instagram.get('users/self/media/recent', (err, data) => {
      if (err) {
        // an error occured
        console.log(err)
      } else {
        data.data.forEach(photo => {
          const node = {
            id: createNodeId(photo.id),
            images: photo.images,
            link: photo.link,
            location: photo.location.name,
            parent: null,
            children: [],
            internal: {
              type: `InstagramImages`,
              contentDigest: createContentDigest(photo),
            },
          }

          createNode(node)

          resolve()
        })
      }
    })
  })

  const sourceFromGithub = Promise.map(openSourceProject, async project => {
    const { data } = await axios(
      `https://api.github.com/repos/danilowoz/${project}`
    )

    const node = {
      id: createNodeId(project),
      project: project,
      description: data.description,
      stars: data.stargazers_count,
      link: data.html_url,
      language: data.language,
      parent: null,
      children: [],
      internal: {
        type: `ProjectGithubNode`,
        contentDigest: createContentDigest(data),
      },
    }

    createNode(node)
  })

  return Promise.all([sourceFromInstagram, sourceFromGithub])
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

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

exports.createPages = ({ graphql, actions, reporter, pathPrefix }) => {
  const { createPage } = actions
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
              frontmatter {
                title
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
    // We'll call `createPage` for each result
    posts.forEach(({ node }, index) => {
      let previous = index === posts.length - 1 ? null : posts[index + 1].node
      let next = index === 0 ? null : posts[index - 1].node

      if (previous && !previous.fields.published) {
        previous = null
      }
      if (next && !next.fields.published) {
        next = null
      }

      createPage({
        path: `${pathPrefix}${node.fields.slug}`,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: { id: node.id, previous, next },
      })
    })
  })
}
