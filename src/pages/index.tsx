import React from 'react'

import { getPosts } from 'common/utils/blog'

const IndexPage = ({ posts }) => {
  return (
    <div>
      {posts.map((item) => (
        <p>{item.filename}</p>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const posts = await getPosts()

  return { props: { posts } }
}

export default IndexPage
