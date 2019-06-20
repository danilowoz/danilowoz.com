import React from 'react'

const colors = [
  {
    main: '#171717',
    background: '#eeeeee55',
    foreground: '#7f7f7f',
    section: '#eeeeee77',
    card: '#fff',
    body: '#fff',
    hover: '#004BCE',
  },
  {
    main: '#171717',
    background: '#eeeeee55',
    foreground: '#676767',
    section: '#eeeeee77',
    card: '#fff',
    body: '#fff',
    hover: '#004BCE',
  },
  {
    main: '#fff',
    background: '#17171d',
    foreground: '#a3a3af',
    section: '#121217',
    card: '#1D2738',
    body: '#17171d',
    hover: '#fff',
  },
  {
    main: '#006494',
    background: '#E8F1F255',
    foreground: '#13293D97',
    section: '#eeeeee77',
    card: '#fff',
    body: '#fff',
    hover: '#004BCE',
  },
]

export const LayoutContext = React.createContext({
  setCurrentVariables: () => {},
  currentVariables: colors[0],
  colors,
})

export const Provider = ({ children }) => {
  const [currentVariables, setCurrentVariables] = React.useState(colors[0])

  return (
    <LayoutContext.Provider
      value={{
        currentVariables,
        setCurrentVariables,
        colors,
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}
