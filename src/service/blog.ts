import fs from 'fs'
import path from 'path'

import detectFrontmatter from 'remark-frontmatter'
import visit from 'unist-util-visit'
import yaml from 'yaml'
import { Node } from 'unist'

import { createCompiler } from '@mdx-js/mdx'

type UnknownObject = { [key: string]: UnknownObject | any }

type FrontMatterPost = {
  categories?: string[]
  cover?: string
  date?: string
  tagline?: string
  title?: string
  path?: string
}

export type PostsListProps = FrontMatterPost & {
  filename?: string
  slug?: string
}

/**
 * MDX processor
 */
const transformMdx = async (
  filename: string
): Promise<FrontMatterPost | undefined> => {
  const extractFrontmatter = () => (tree: Node, file: UnknownObject) => {
    visit(tree, 'yaml', (node: UnknownObject) => {
      file.data.frontmatter = yaml.parse(node.value)
    })
  }

  const mdxCompiler = createCompiler({
    remarkPlugins: [detectFrontmatter, extractFrontmatter],
  })

  let frontmatter

  await mdxCompiler.process(
    filename,
    (_err: UnknownObject, file: UnknownObject) => {
      frontmatter = file.data.frontmatter
    }
  )

  return frontmatter
}

/**
 * Get list of posts and returns the filename and slug
 */
export const getPosts = async () => {
  const PROJECTS_PATH = 'src/content/projects'
  const onlyMdxFiles = (e: string) => e.indexOf('.mdx') > -1

  const postsDirectory = path.join(process.cwd(), PROJECTS_PATH)
  const filenames = fs.readdirSync(postsDirectory)

  const posts: Promise<PostsListProps>[] = filenames
    .filter(onlyMdxFiles)
    .map(async (filename) => {
      const contentFile = fs.readFileSync(
        path.join(process.cwd(), PROJECTS_PATH, filename),
        'utf8'
      )

      const metadata = await transformMdx(contentFile)

      return {
        ...metadata,
        filename,
        path: filename.replace('.mdx', ''),
        slug: `blog/${filename.replace('.mdx', '')}`,
      }
    })

  const completedPosts = await Promise.all(posts)

  return completedPosts.sort((a, b) => {
    return new Date(b?.date ?? '').getTime() - new Date(a?.date ?? '').getTime()
  })
}

/**
 * Returns the path of posts
 */
export const getPostsPaths = async () => {
  const posts = await getPosts()

  return posts.map((post) => ({ params: { slug: post.path } }))
}
