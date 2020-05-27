import React from 'react'

import { Header, AboutMe } from 'common/components'

const IndexPage = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <h1>A Visual Type Scale</h1>

          <p>
            What looked like a small patch of purple grass, above five feet
            square, was moving across the sand in their direction.
          </p>
        </section>

        <AboutMe />
      </main>
    </>
  )
}

export default IndexPage
