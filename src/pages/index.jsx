import React from 'react'

import Layout from '../components/Layout'
import HomeHeader from '../components/HomeHeader'
import Sections from '../components/Sections'
import SEO from '../components/seo'
import { Provider } from '../components/LayoutContext'

const IndexPage = () => {
  return (
    <Provider>
      <Layout>
        <SEO />
        <HomeHeader />
        <Sections />
      </Layout>
    </Provider>
  )
}

export default IndexPage
