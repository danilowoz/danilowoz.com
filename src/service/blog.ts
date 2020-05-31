/* eslint-disable @typescript-eslint/no-var-requires */
import { createRequire } from 'module'
import fs from 'fs'
import path from 'path'
import rimraf from 'rimraf'

const mdx = require('@mdx-js/mdx')
const babel = require('@babel/core')

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

      return {
        ...metadata,
        filename,
        path: filename.replace('.mdx', ''),
        slug: `blog/${filename.replace('.mdx', '')}`,
      }
    })

  // Clean files
  const completedPosts = await Promise.all(posts)

  rimraf(TEMP_DIR, {}, (err) => console.error(err))

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
