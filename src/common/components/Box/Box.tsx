import { createElement } from 'react'

import gridCss from './grid.module.css'
import variantCss from './variant.module.css'

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
  const classNameComposed = `${variantCss[variant]} ${
    gridCss.grid
  } ${className} ${container ? gridCss.container : ''}`

  return createElement(as, {
    className: classNameComposed,
    children,
  })
}

export { Box }
