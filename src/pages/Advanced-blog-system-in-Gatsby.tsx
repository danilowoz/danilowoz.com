import React from 'react'
import Head from 'next/head'

const Redirect = () => {
  return (
    <Head>
      <meta
        httpEquiv="refresh"
        content="0; url=http://danilowoz.com/blog/advanced-blog-system-in-gatsby"
      />
    </Head>
  )
}

export default Redirect
