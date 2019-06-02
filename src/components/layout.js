import React from 'react'
import Helmet from 'react-helmet'
import { GoogleFont } from 'react-typography'
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'wipe.css'

import typography from './typography'

const GlobalStyle = createGlobalStyle`
 ${reset}
 ${typography.toString()}
`

const Variables = styled.div`
  --main: #000;
  --foreground: #4a4a4a;
  --background: #9b9b9b;

  --transitionCubic: all cubic-bezier(0.19, 1, 0.22, 1) 600ms;
  --transitionEase: all ease-in-out 600ms;

  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`

const Layout = ({ children }) => (
  <Variables>
    <>
      <Helmet>
        <GoogleFont typography={typography} />
      </Helmet>
      <GlobalStyle />
      <main>{children}</main>
    </>
  </Variables>
)

export default Layout
