import React from 'react'

const colors = [
  {
    background: '#eeeeee55',
    main: '#171717',
    foreground: '#676767',
    body: '#fff',
    hover: 'red',
  },
  {
    background: '#eeeeee55',
    main: '#171717',
    card: '#fff',
    foreground: '#676767',
    body: '#fff',
    hover: '#004BCE',
  },
  {
    background: '#11151C',
    card: '#1D2738',
    main: '#607499',
    foreground: '#bbb',
    body: '#000',
  },
  {
    background: '#E8F1F2',
    card: '#fff',
    main: '#364156',
    foreground: '#13293D',
    body: '#fff',
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
