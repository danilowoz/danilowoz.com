exports.sourceNodes = async (...args) => {
  await Promise.all([
    ...require('./gatsby/get-github-data.js')(...args),
    require('./gatsby/get-instagram-images.js').sourceNodes(...args),
  ])
}

exports.onCreateNode = async (...args) => {
  await Promise.all([require('./gatsby/create-posts.js').createNode(...args)])
}

exports.createPages = async (...args) => {
  await Promise.all([require('./gatsby/create-posts.js').createPosts(...args)])
}
