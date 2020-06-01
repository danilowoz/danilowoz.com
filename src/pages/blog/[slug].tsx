import React from 'react'
import dynamic from 'next/dynamic'
import { getPostsPaths, getPosts, PostsListProps } from 'service/projects'
import { Footer } from 'components'

import style from 'components/BlogPost/BlogPost.module.css'
import { HeaderCompact } from 'components/Header/HeaderCompact'

const BlogPostPage: React.FC<{
  filename: string
  metadata: PostsListProps
}> = ({ filename, metadata }) => {
  const Content = dynamic(() => import(`content/projects/${filename}.mdx`))

  return (
    <>
      <div className={style.post}>
        <HeaderCompact />
        <article>
          <header>
            <h1>{metadata.title}</h1>
            <h4>{metadata.tagline}</h4>
            <figure>
              <img src={metadata.cover} alt={metadata.title} />
              <figcaption>
                <small>{metadata.coverCredit}</small>
              </figcaption>
            </figure>
          </header>

          <Content />
        </article>
      </div>

      <Footer />
    </>
  )
}

export const getStaticProps = async ({ params }: any) => {
  const posts = await getPosts()
  const postsMetadata = posts.find((item) => item.slug === params.slug)

  return { props: { filename: params.slug, metadata: postsMetadata } }
}

export const getStaticPaths = async () => {
  const paths = await getPostsPaths()

  return { paths, fallback: false }
}

export default BlogPostPage
