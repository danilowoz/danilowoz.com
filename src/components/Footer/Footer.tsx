import React from 'react'

import { Box } from '../Box'
import githubSrc from './icons/logo-github.svg'
import twitterSrc from './icons/logo-twitter.svg'
import instagramSrc from './icons/logo-instagram.svg'
import behanceSrc from './icons/logo-behance.svg'
import style from './Footer.module.css'

const Footer = () => {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Box as="footer" variant="dark">
      <div className={style.divider} />

      <div className={style.title}>
        <h1>Reach out to me at</h1>

        <p>
          <em>danilowoz@gmail.com</em>
        </p>
      </div>

      <div className={style.social}>
        <button type="button" onClick={goToTop} className={style.scrollToTop}>
          Scroll to top
        </button>

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
      </div>
    </Box>
  )
}

export { Footer }
