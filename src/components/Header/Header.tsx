import React from 'react'
import styled from 'styled-components'

import Content from 'content/header.mdx'

import { Box } from '../Box'
import { Background } from './Background'

const Wrap = styled.div`
  color: var(--color-haze);
  position: relative;
  z-index: 1;

  h1 {
    margin-top: 0;
    font-size: 1.7em;
  }

  h4 {
    margin-top: 2.2em;
  }

  @media (min-width: 576px) {
    grid-column: 1/7;
  }

  @media (min-width: 769px) {
    grid-column: 2/11;
  }
`

const Header: React.FC = () => {
  return (
    <Box as="header">
      <Background />
      <Wrap>
        <Content />
      </Wrap>
    </Box>
  )
}

export { Header }
