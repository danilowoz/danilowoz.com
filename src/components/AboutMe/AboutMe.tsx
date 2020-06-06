import React from 'react'
import styled from 'styled-components'

import Content from 'content/about-me.mdx'

import { Box } from '../Box'

const Wrapper = styled(Box)`
  article > *:first-child,
  aside > *:first-child {
    margin-top: 0;
  }

  aside {
    padding-top: 1.15rem;

    p {
      color: var(--color-heading);
    }
  }

  @media (min-width: 576px) {
    article {
      grid-column: 1/7;
    }

    aside {
      grid-column: 1/7;
      padding-top: calc((2.074rem * var(--font-line-height-base)) * 3 + 1.5em);
    }

    span {
      display: block;
      padding-right: calc(var(--grid-width) / var(--grid-column));
    }
  }

  @media (min-width: 769px) {
    article {
      grid-column: 1/7;
    }

    aside {
      grid-column: 9/13;
    }
  }
`

const AboutMe: React.FC = () => {
  return (
    <Wrapper variant="dark" id="about-me">
      <Content />
    </Wrapper>
  )
}

export { AboutMe }
