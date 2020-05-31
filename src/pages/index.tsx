import React from 'react'
import { GetStaticProps } from 'next'
import { Header, Footer, AboutMe, Projects } from 'components'
import { getPosts, PostsListProps } from 'service/projects'

const IndexPage: React.FC<{ posts: PostsListProps[] }> = ({ posts }) => {
  return (
    <>
      <Header />

      <main>
        <Projects data={posts} />
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
