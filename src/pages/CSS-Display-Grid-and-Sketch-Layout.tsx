import React from 'react'
import Head from 'next/head'

const Redirect = () => {
  return (
    <Head>
      <meta
        httpEquiv="refresh"
        content="0; url=http://danilowoz.com/blog/css-display-grid-and-sketch-layout"
      />
    </Head>
  )
}

export default Redirect
