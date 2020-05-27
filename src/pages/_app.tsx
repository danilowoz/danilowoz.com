import React from 'react'

import App from 'next/app'
import { Layout } from 'common/components'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default MyApp
