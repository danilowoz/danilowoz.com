import React from 'react'

import Content from 'content/header.mdx'

import { Box } from '../Box'
import styles from './Header.module.css'

const Header: React.FC = () => {
  return (
    <Box as="header">
      <div className={styles.wrap}>
        <Content />
      </div>
    </Box>
  )
}

export { Header }
