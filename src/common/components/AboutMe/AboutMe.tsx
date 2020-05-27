import React from 'react'

import Content from 'content/about-me.mdx'

import { DarkTheme } from '../DarkTheme'
import style from './AboutMe.module.css'

const AboutMe: React.FC = () => {
  return (
    <DarkTheme>
      <section className={style['about-me']}>
        <Content />
      </section>
    </DarkTheme>
  )
}

export { AboutMe }
