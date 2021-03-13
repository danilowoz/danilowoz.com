import React from 'react'
import { GetStaticProps } from 'next'

import { getPosts, PostsListProps } from 'service/projects'
import { Header, Footer, AboutMe, BlogPosts, HeaderFixed } from 'components'
import { Projects } from 'components/Projects/Projects'

const IndexPage: React.FC<{
  posts: Record<'blogPosts' | 'projects', PostsListProps[]>
}> = ({ posts }) => {
  return (
    <>
      <HeaderFixed />
      <Header />

      <main>
        <BlogPosts data={posts.blogPosts} />
        <Projects data={posts.projects} />
        <AboutMe />
      </main>

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts()

  return { props: { posts } }
}

export default IndexPage
