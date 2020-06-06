/* eslint-disable @typescript-eslint/no-var-requires, import/order */
import { createRequire } from 'module'
import fs from 'fs'
import path from 'path'

const mdx = require('@mdx-js/mdx')
const babel = require('@babel/core')

type FrontMatterPost = {
  categories?: string[]
  cover?: string
  date?: string
  tagline?: string
  title?: string
  link?: string
  slug?: string
  type?: 'article' | 'github' | 'web'
  priority?: number
  coverCredit?: string
  timeToRead?: string
}

export type PostsListProps = FrontMatterPost & {
  filename?: string
}

/**
 * Constantans
 */
const PROJECTS_PATH = 'src/content/projects'
const TEMP_DIR = path.resolve(`${PROJECTS_PATH}/_temp/`)

/**
 * Receives a code string and a filename
 * 1. Create a temp dir
 * 2. Create a file with the code string
 * 3. Read the file as a module
 * 4. Removes temp folder
 */
const requireFromString = async (code: string, filename: string) => {
  // paths
  const cleanFilename = filename.replace('.mdx', '')

  const tempPath = path.resolve(`${PROJECTS_PATH}/_temp/${cleanFilename}.js`)

  // Create temp dir
  if (!fs.existsSync(TEMP_DIR)) {
    fs.mkdirSync(TEMP_DIR)
  }

  return await new Promise<NodeRequire & Record<'metadata', FrontMatterPost>>(
    (resolve) => {
      fs.writeFile(tempPath, code, () => {
        const require = createRequire(tempPath)
        const file = require(tempPath)

        delete require.cache[require.resolve(tempPath)]

        resolve(file)
      })
    }
  )
}

/**
 * MDX processor
 */
const transformMdx = async (
  filename: string
): Promise<FrontMatterPost | undefined> => {
  const content = fs.readFileSync(
    path.join(process.cwd(), PROJECTS_PATH, filename),
    'utf8'
  )

  const jsx = await mdx(content)
  const transformed = babel.transformSync(jsx, {
    babelrc: false,
    presets: ['@babel/preset-react'],
    plugins: ['@babel/plugin-transform-modules-commonjs'],
  })

  const module = await requireFromString(transformed.code, filename)

  return module.metadata
}

/**
 * Get list of posts and returns the filename and slug
 */
export const getPosts = async () => {
  const onlyMdxFiles = (e: string) => e.indexOf('.mdx') > -1

  const postsDirectory = path.join(process.cwd(), PROJECTS_PATH)
  const filenames = fs.readdirSync(postsDirectory)

  const posts: Promise<PostsListProps>[] = filenames
    .filter(onlyMdxFiles)
    .map(async (filename) => {
      const metadata = await transformMdx(filename)
      const fileNameCleaned = filename.replace('.mdx', '')

      return {
        ...metadata,
        filename,
        path: fileNameCleaned,
        slug: fileNameCleaned,
        link:
          metadata?.type === 'article'
            ? `/blog/${fileNameCleaned}`
            : metadata?.link,
      }
    })

  // Clean files
  const completedPosts = await Promise.all(posts)

  return completedPosts.sort((a, b) => {
    const dateA = new Date(a?.date ?? '').getTime()
    const dateB = new Date(b?.date ?? '').getTime()

    if (a.priority === b.priority) {
      return dateA - dateB
    }

    return (a?.priority ?? 0) - (b.priority ?? 0)
  })
}

/**
 * Returns the path of posts
 */
export const getPostsPaths = async () => {
  const posts = await getPosts()
  const onlyPosts = (e: PostsListProps) => e.type === 'article'

  return posts
    .filter(onlyPosts)
    .map((post) => ({ params: { slug: post?.slug } }))
}

/**
 * Related posts based in a post
 */
export const getRelated = async (slug?: string) => {
  // Data
  const posts = await getPosts()
  const referPost = posts.find((e) => e.slug === slug)

  // Helpers
  const MAX = 3
  const removeArticle = (e: string) => e !== 'Article'
  const noRepeat = (e: PostsListProps) => e.slug !== slug

  const fallBacks = posts.filter(noRepeat).slice(0, MAX)
  const related = posts.filter(noRepeat).filter((p) => {
    return p?.categories
      ?.filter(removeArticle)
      .some((r) => referPost?.categories?.filter(removeArticle)?.includes(r))
  })

  return [...related, ...fallBacks].slice(0, MAX)
}
