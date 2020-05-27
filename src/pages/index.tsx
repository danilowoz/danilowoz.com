import React from 'react'

import { getPosts } from 'common/utils/blog'
import { Header } from 'common/components'

const IndexPage = ({ posts }: any) => {
  return (
    <>
      <Header />
      <main>
        <h1>A Visual Type Scale</h1>

        <p>
          What looked like a small patch of purple grass, above five feet
          square, was moving across the sand in their direction.
        </p>

        <p>
          When it came near enough he perceived that it was not grass; there
          were no blades, but only purple roots. The roots were revolving, for
          each small plant in the whole patch, like the spokes of a rimless
          wheel.
        </p>

        <h2>A Visual Type Scale</h2>

        <p>
          What looked like a small patch of purple grass, above five feet
          square, was moving across the sand in their direction.
        </p>

        <p>
          When it came near enough he perceived that it was not grass; there
          were no blades, but only purple roots. The roots were revolving, for
          each small plant in the whole patch, like the spokes of a rimless
          wheel.
        </p>

        <h3>A Visual Type Scale</h3>

        <p>
          What looked like a small patch of purple grass, above five feet
          square, was moving across the sand in their direction.
        </p>

        <p>
          When it came near enough he perceived that it was not grass; there
          were no blades, but only purple roots. The roots were revolving, for
          each small plant in the whole patch, like the spokes of a rimless
          wheel.
        </p>

        <h4>A Visual Type Scale</h4>

        <p>
          What looked like a small patch of purple grass, above five feet
          square, was moving across the sand in their direction.
        </p>

        <p>
          When it came near enough he perceived that it was not grass; there
          were no blades, but only purple roots. The roots were revolving, for
          each small plant in the whole patch, like the spokes of a rimless
          wheel.
        </p>

        <h5>A Visual Type Scale</h5>

        <p>
          What looked like a small patch of purple grass, above five feet
          square, was moving across the sand in their direction.
        </p>

        <p>
          When it came near enough he perceived that it was not grass; there
          were no blades, but only purple roots. The roots were revolving, for
          each small plant in the whole patch, like the spokes of a rimless
          wheel.
        </p>

        <p className="text_small">
          — Excerpt from A Voyage to Arcturus, by David Lindsay.
        </p>

        {posts.map((item: any) => (
          <p key={item.filename}>{item.filename}</p>
        ))}
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const posts = await getPosts()

  return { props: { posts } }
}

export default IndexPage
