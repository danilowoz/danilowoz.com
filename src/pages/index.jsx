import React from 'react'

import Layout from '../components/Layout'
import HomeHeader from '../components/HomeHeader'
import Sections from '../components/Sections'
import SEO from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <HomeHeader />
      <Sections />
    </Layout>
  )
}

export default IndexPage
