import React from 'react'
import dynamic from 'next/dynamic'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import {
  getPostsPaths,
  getPosts,
  PostsListProps,
  getRelated,
} from 'service/projects'
import { Footer, Projects } from 'components'

import style from 'components/BlogPost/BlogPost.module.css'
import { HeaderCompact } from 'components/Header/HeaderCompact'

const BlogPostPage: React.FC<{
  filename: string
  metadata: PostsListProps
  related: PostsListProps[]
}> = ({ filename, metadata, related }) => {
  const Content = dynamic(() => import(`content/projects/${filename}.mdx`))

  return (
    <>
      <NextSeo
        title={metadata.title}
        description={metadata.tagline}
        openGraph={{
          title: metadata.title,
          description: metadata.tagline,
          images: [
            {
              url: metadata.cover ?? '',
              width: 800,
              height: 600,
              alt: metadata.title,
            },
          ],
          // eslint-disable-next-line @typescript-eslint/camelcase
          site_name: metadata.title,
        }}
      />
      <div className={style.post}>
        <HeaderCompact />
        <article>
          <header>
            <small>
              {metadata.categories?.join(' - ')} · {metadata.timeToRead}
            </small>
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

      <Projects data={related} compact />

      <Footer compact />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getPosts()
  const postsMetadata = posts.find((item) => item.slug === params?.slug)
  const related = await getRelated(postsMetadata?.slug ?? '')

  return { props: { filename: params?.slug, metadata: postsMetadata, related } }
}

export const getStaticPaths = async () => {
  const paths = await getPostsPaths()

  return { paths, fallback: false }
}

export default BlogPostPage
