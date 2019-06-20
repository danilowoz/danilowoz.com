import React from 'react'
import Helmet from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'wipe.css'

import { LayoutContext } from './LayoutContext'
import * as T from './typography'

const GlobalStyle = createGlobalStyle`
 ${reset}
 ${T.globalStyle}

 :root {
    --mainFont: "Roboto", sans-serif;

    --transitionCubic: all cubic-bezier(0.19, 1, 0.22, 1) 400ms;
    --transitionEase: ease-in-out 400ms;

    --shadow: rgba(0, 0, 0, 0.1) 0px 2px 5px 0px;;
    --borderRadius: 4px;
  }
`

const Variables = styled.div`
  --body: ${({ vars }) => vars.body};
  --main: ${({ vars }) => vars.main};
  --foreground: ${({ vars }) => vars.foreground};
  --background: ${({ vars }) => vars.background};
  --section: ${({ vars }) => vars.section};
  --hover: ${({ vars }) => vars.hover};
  --card: ${({ vars }) => vars.card};

  background: var(--body);
  transition: background var(--transitionEase);
`

const Layout = ({ children }) => {
  const { currentVariables } = React.useContext(LayoutContext)

  return (
    <Variables vars={currentVariables}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <main>{children}</main>
    </Variables>
  )
}

export default Layout
