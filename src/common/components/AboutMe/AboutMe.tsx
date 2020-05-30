import React from 'react'

import Content from 'content/about-me.mdx'

import style from './AboutMe.module.css'
import { Box } from '../Box'

const AboutMe: React.FC = () => {
  return (
    <Box variant="dark" className={style['about-me']}>
      <Content />
    </Box>
  )
}

export { AboutMe }
