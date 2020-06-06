import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import base from 'content/base.json'

const Header = styled.header`
  border-bottom: 1px solid #eee;
  width: 100%;
  max-width: 40rem;

  padding: 1em 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4em;

  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 1rem;
    color: var(--color-heading);
    margin: 0;
  }

  strong {
    color: var(--color-foreground);
  }

  span {
    display: none;
  }

  nav a {
    margin-left: 1em;
    font-size: 1rem;
  }

  @media (min-width: 576px) {
    span {
      display: inline;
    }
  }
`

const HeaderCompact: React.FC = () => {
  return (
    <Header>
      <Link href="/">
        <a href="/">
          <h1>
            <strong>Danilo Woznica</strong> <span>- {base['short-title']}</span>
          </h1>
        </a>
      </Link>

      <nav>
        <Link href="/#projects">
          <a href="/#projects">Other projects</a>
        </Link>

        <Link href="/#about-me">
          <a href="/#about-me">About me</a>
        </Link>
      </nav>
    </Header>
  )
}

export { HeaderCompact }
