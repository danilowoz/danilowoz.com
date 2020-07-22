import React from 'react'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { useAmp } from 'next/amp'
import {
  getPostsPaths,
  getPosts,
  PostsListProps,
  getRelated,
} from 'service/projects'
import { Footer, Projects, BlogPost, HeaderCompact } from 'components'

import content from 'content/base.json'
import blogPosts from 'content/blog'

const BlogPostPage: React.FC<{
  filename: keyof typeof blogPosts
  metadata: PostsListProps
  related: PostsListProps[]
}> = ({ filename, metadata, related }) => {
  const Content = blogPosts[filename]
  const isAmp = useAmp()

  return (
    <>
      <NextSeo
        canonical={`${content.url}${metadata.link}`}
        title={metadata.title}
        description={metadata.tagline}
        openGraph={{
          url: `${content.url}${metadata.link}`,
          title: metadata.title,
          description: metadata.tagline,
          images: [
            {
              url: `${content.url}${metadata.cover ?? ''}`,
              width: 800,
              height: 600,
              alt: metadata.title,
            },
          ],
        }}
      />
      <HeaderCompact />

      <BlogPost>
        <article>
          <header>
            <small>
              {metadata.categories?.join(' - ')} · {metadata.timeToRead}
            </small>
            <h1>{metadata.title}</h1>
            <h4>{metadata.tagline}</h4>
            {isAmp ? (
              <amp-img
                src={metadata.cover}
                alt={metadata.title}
                layout="responsive"
                width="2400"
                height="1200"
              />
            ) : (
              <figure>
                <img src={metadata.cover} alt={metadata.title} />
                <figcaption>
                  <small>{metadata.coverCredit}</small>
                </figcaption>
              </figure>
            )}
          </header>

          <Content />
        </article>
      </BlogPost>

      {!isAmp && <Projects data={related} compact />}
      {!isAmp && <Footer compact />}
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getPosts()
  const postsMetadata = posts.find((item) => item.slug === params?.slug)
  const related = await getRelated(postsMetadata?.slug)

  return { props: { filename: params?.slug, metadata: postsMetadata, related } }
}

export const getStaticPaths = async () => {
  const paths = await getPostsPaths()

  return { paths, fallback: false }
}

export const config = { amp: 'hybrid' }

export default BlogPostPage
