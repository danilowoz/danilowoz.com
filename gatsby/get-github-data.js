const axios = require('axios')

module.exports = ({
  actions: { createNode },
  createNodeId,
  createContentDigest,
}) => {
  const openSourceProject = [
    'react-content-loader',
    'create-content-loader',
    'react-atomic-design',
    'wipe.css',
    'gatsby-advanced-blog-system',
  ]

  return openSourceProject.map(async project => {
    return new Promise(async resolve => {
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
      resolve()
    })
  })
}
