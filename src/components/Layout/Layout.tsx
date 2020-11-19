import React from 'react'

import { useAnalytics } from 'service/useAnalytics'

import Reset from './reset'
import Root from './root'
import Typography from './typography'
import { MDXContext } from './MDXContext'

const Layout: React.FC = ({ children }) => {
  useAnalytics()

  return (
    <>
      <Reset />
      <Root />
      <Typography />
      <MDXContext>{children}</MDXContext>
    </>
  )
}

export { Layout }
