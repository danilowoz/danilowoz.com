import React from 'react'

import style from './DarkTheme.style.css'

const DarkTheme: React.FC = ({ children }) => {
  return <div className={style.dark}>{children}</div>
}

export { DarkTheme }
