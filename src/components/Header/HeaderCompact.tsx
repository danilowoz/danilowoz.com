import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import base from 'content/base.json'

const Header = styled.header`
  border-bottom: 1px solid #eee;
  width: 100%;
  max-width: 50rem;

  padding: 1em 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4em;

  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 1rem;
    color: var(--color-haze);
    margin: 0;
  }

  strong {
    color: rgb(var(--color-foreground));
  }

  span {
    display: none;

    @media (min-width: 576px) {
      display: inline;
    }
  }

  nav a {
    margin-left: 1.2em;
    font-size: 0.8rem;

    @media (min-width: 576px) {
      margin-left: 2em;
      font-size: 1rem;
    }
  }
`

const HeaderCompact: React.FC = (props) => {
  return (
    <Header {...props}>
      <Link href="/">
        <a href="/">
          <h1>
            <strong>Danilo Woznica</strong> <span>- {base['short-title']}</span>
          </h1>
        </a>
      </Link>

      <nav>
        <Link href="/#projects">
          <a href="/#projects">Projects</a>
        </Link>

        <Link href="/#about-me">
          <a href="/#about-me">About me</a>
        </Link>

        <Link href="/#contact">
          <a href="/#contact">Contact</a>
        </Link>
      </nav>
    </Header>
  )
}

export { HeaderCompact }
