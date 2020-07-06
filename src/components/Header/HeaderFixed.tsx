import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Box } from 'components/Box'

import { HeaderCompact } from './HeaderCompact'

const HeaderCompactStyled = styled(HeaderCompact)`
  border: 0;
  margin-bottom: 0;
  max-width: 100%;
`

const Header = styled.div<{ visibility: boolean }>`
  position: fixed;
  z-index: 9999;

  left: 0;
  right: 0;
  top: 0;
  background: rgba(var(--color-background), 0.8);
  backdrop-filter: saturate(180%) blur(20px);

  border-bottom: 1px solid rgba(var(--color-foreground), 0.1);

  transition: all 300ms ease;
  transform: translateY(${({ visibility }) => (visibility ? '0%' : '-100%')});

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: calc(var(--grid-gutter) / 2);
  padding-right: calc(var(--grid-gutter) / 2);

  width: 100%;
  max-width: var(--grid-width);

  display: flex;
  justify-content: space-between;
`

const HeaderFixed = () => {
  const [visibility, setVisibility] = useState(false)
  const [variantDark, setVariantDark] = useState(false)

  const handleMenu = () => {
    const headerHeight = 59
    const windowHeight = window.innerHeight
    const windowScroll = window.scrollY
    const aboutMeSection =
      document.getElementById('about-me')?.offsetTop ?? Infinity

    setVisibility(windowScroll > windowHeight / 2)
    setVariantDark(windowScroll > aboutMeSection - headerHeight)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleMenu)

    return () => {
      window.removeEventListener('scroll', handleMenu)
    }
  }, [])

  return (
    <Box variant={variantDark ? 'dark' : 'light'} style={{ padding: 0 }}>
      <Header visibility={visibility}>
        <Container>
          <HeaderCompactStyled />
        </Container>
      </Header>
    </Box>
  )
}

export { HeaderFixed }
