import fs from 'fs'
import path from 'path'

export const getPosts = () => {
  const postsDirectory = path.join(process.cwd(), 'src/content')
  const filenames = fs.readdirSync(postsDirectory)

  const posts = filenames.map(async (filename) => {
    return { filename, slug: filename.replace('.mdx', '') }
  })

  return Promise.all(posts)
}

export const getPaths = async () => {
  const posts = await getPosts()

  return posts.map((post) => ({
    params: { slug: post.slug },
  }))
}
