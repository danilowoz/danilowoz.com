import React from 'react'
import styled from 'styled-components'

import Content from 'content/header.mdx'

import { Box } from '../Box'

const Background = styled(Box)`
  background-size: 1.73em 1.73em;
  background-image: -webkit-repeating-radial-gradient(
    top center,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.1) 1px,
    transparent 0,
    transparent 100%
  );
  background-repeat: repeat;
  background-position: center top 0.86em;

  position: relative;

  &:after {
    content: '';

    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 20%;
    z-index: 0;

    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`

const Wrap = styled.header`
  color: var(--color-haze);
  position: relative;
  z-index: 1;

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
    <Background as="header">
      <Wrap>
        <Content />
      </Wrap>
    </Background>
  )
}

export { Header }
