import { createElement } from 'react'

import style from './Box.style.css'

const Box: React.FC<{
  as?: string
  className?: string
  container?: boolean
  variant?: 'light' | 'dark'
}> = ({
  as = 'section',
  children,
  className = '',
  container = false,
  variant = 'light',
}) => {
  const classNameComposed = `${style[variant]} ${style.grid} ${className} ${
    container ? style.container : ''
  }`

  return createElement(as, {
    className: classNameComposed,
    children,
  })
}

export { Box }
