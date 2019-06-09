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

  --transitionCubic: all cubic-bezier(0.19, 1, 0.22, 1) 400ms;
  --transitionEase: all ease-in-out 400ms;

  --shadow: 0 4px 18px rgba(0, 0, 0, 0.12), 0 5px 5px rgba(0, 0, 0, 0.12);
  --bordeRadius: 6px;
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
