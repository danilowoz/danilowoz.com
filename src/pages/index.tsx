import React from 'react'

import { Header, Footer, AboutMe } from 'components'

const IndexPage = () => {
  return (
    <div>
      <Header />

      <main>
        <AboutMe />
      </main>

      <Footer />
    </div>
  )
}

export default IndexPage
