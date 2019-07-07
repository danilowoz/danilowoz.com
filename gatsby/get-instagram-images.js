const Instagram = require('node-instagram').default

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = ({
  actions: { createNode },
  createNodeId,
  createContentDigest,
}) => {
  const instagram = new Instagram({
    clientId: process.env.INSTAGRAM_CLIENT_ID,
    clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
  })

  return new Promise(resolve => {
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
}
