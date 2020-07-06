import React, { useState, useEffect } from 'react'
import Head from 'next/head'

const routes = {
  'Atomic-Design-with-React': 'blog/atomic-design-with-react',
  'Advanced-blog-system-in-Gatsby': 'blog/advanced-blog-system-in-gatsby',
  'CSS-Display-Grid-and-Sketch-Layout':
    'blog/css-display-grid-and-sketch-layout',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any

const Redirect = () => {
  const [path, setPath] = useState<string>()

  useEffect(() => {
    setPath(window.location.pathname.replace(/\//gm, ''))
  }, [])

  if (!path || !routes[path]) {
    return (
      <meta httpEquiv="refresh" content={`0; url=https://danilowoz.com/`} />
    )
  }

  return (
    <Head>
      <meta
        httpEquiv="refresh"
        content={`0; url=https://danilowoz.com/${routes[path]}`}
      />
    </Head>
  )
}

export default Redirect
