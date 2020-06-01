import React from 'react'
import Link from 'next/link'

import base from 'content/base.json'

import styles from './Header.module.css'

const HeaderCompact: React.FC = () => {
  return (
    <header className={styles.compactHeader}>
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
    </header>
  )
}

export { HeaderCompact }
