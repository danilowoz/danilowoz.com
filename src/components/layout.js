import React from 'react'
import Helmet from 'react-helmet'
import { GoogleFont } from 'react-typography'
import { ThemeProvider } from 'styled-components'

import typography from './typography'

const theme = {
  colors: {
    grayscale: {
      black: '#000',
      medium: '#4A4A4A',
      light: '#9B9B9B',
    },
  },
}

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Helmet>
        <GoogleFont typography={typography} />
      </Helmet>
      <main>{children}</main>
    </>
  </ThemeProvider>
)

export default Layout
