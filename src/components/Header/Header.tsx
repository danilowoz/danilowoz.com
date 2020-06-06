import React from 'react'
import styled from 'styled-components'

import Content from 'content/header.mdx'

import { Box } from '../Box'

const Wrap = styled.header`
  color: var(--color-heading);

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
      <Wrap>
        <Content />
      </Wrap>
    </Box>
  )
}

export { Header }
