import React from 'react'
import styled from 'styled-components'

import { Box } from '../Box'
import githubSrc from './icons/logo-github.svg'
import twitterSrc from './icons/logo-twitter.svg'
import instagramSrc from './icons/logo-instagram.svg'
import behanceSrc from './icons/logo-behance.svg'

const Social = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  position: relative;
  overflow: hidden;

  @media (min-width: 769px) {
    grid-column: 6/13;
    justify-content: flex-end;
  }

  a,
  img {
    width: 2rem;
    height: 2rem;
    max-width: 2rem;
    display: inline-block;
  }

  a {
    margin-right: 2em;
    transition: opacity 200ms ease-in-out;

    @media (min-width: 769px) {
      margin-right: 0;
      margin-left: 2em;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`

const ScrollToTop = styled.button`
  color: transparent;
  transition: opacity 200ms ease-in-out;
  opacity: 0.7;

  width: 1.4em;
  height: 1.4em;

  border-top: 1px solid #fff;
  border-right: 1px solid #fff;

  transform: rotate(-45deg);

  position: absolute;
  right: 0.5em;
  bottom: -0.4em;

  &:hover {
    opacity: 1;
  }

  @media (min-width: 769px) {
    bottom: 40%;
  }
`

const Title = styled.div`
  @media (min-width: 576px) {
    grid-column: 1/6;
  }

  @media (min-width: 769px) {
    grid-column: 1/6;
  }
`

const Divider = styled.div`
  border-top: 1px solid #ffffff1f;

  @media (min-width: 576px) {
    grid-column: 1/6;
  }

  @media (min-width: 769px) {
    grid-column: 1/13;
  }
`

const Footer: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Box as="footer" variant="dark" id="contact">
      {!compact && <Divider />}

      <Title>
        <h1>Reach out to me at</h1>

        <p>
          <em>danilowoz@gmail.com</em>
        </p>
      </Title>

      <Social>
        <ScrollToTop type="button" onClick={goToTop}>
          Scroll to top
        </ScrollToTop>

        <a href="https://github.com/danilowoz" target="_blank" rel="noreferrer">
          <img src={githubSrc} alt="Github" />
        </a>

        <a
          href="https://twitter.com/danilowoz"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitterSrc} alt="Twitter" />
        </a>

        <a
          href="https://www.instagram.com/danilowoz/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramSrc} alt="Instagram" />
        </a>

        <a
          href="https://www.behance.net/danilowoz"
          target="_blank"
          rel="noreferrer"
        >
          <img src={behanceSrc} alt="Behance" />
        </a>
      </Social>
    </Box>
  )
}

export { Footer }
