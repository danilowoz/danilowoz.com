import React from 'react'
import Head from 'next/head'

const Redirect = () => {
  return (
    <Head>
      <meta
        httpEquiv="refresh"
        content="0; url=http://danilowoz.com/blog/atomic-design-with-react/"
      />
    </Head>
  )
}

export default Redirect
