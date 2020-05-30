import React from 'react'

import { Header, AboutMe, Box } from 'common/components'

const IndexPage = () => {
  return (
    <Box container as="div">
      <Header />

      <Box as="main">
        <Box>
          <h1>A Visual Type Scale</h1>

          <p>
            What looked like a small patch of purple grass, above five feet
            square, was moving across the sand in their direction.
          </p>
        </Box>

        <AboutMe />
      </Box>
    </Box>
  )
}

export default IndexPage
