import React from 'react'
import dynamic from 'next/dynamic'
import { getPostsPaths } from 'service/projects'
// import Article, { metadata } from 'content/projects'

const BlogPostPage = ({ filename }: any) => {
  const Content = dynamic(() => import(`content/projects/${filename}.mdx`))

  // const MDXMetadata = dynamic(() =>
  //   import(`./${filename}`).then((mod) => mod.metadata)
  // )

  return (
    <div>
      <Content />
      {/* <h2>Blog Title: {MDXMetadata.title}</h2> */}
      {/* <h2>Date: {MDXMetadata.date}</h2> */}
    </div>
  )
}

export const getStaticProps = async ({ params }: any) => {
  return { props: { filename: params.slug } }
}

export const getStaticPaths = async () => {
  const paths = await getPostsPaths()

  return { paths, fallback: false }
}

export default BlogPostPage
