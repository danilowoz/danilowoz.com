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
    background: '#1B1B1E',
    card: '#242B3E',
    main: '#D8DBE2',
    foreground: '#ccc',
    body: '#000',
  },
  { background: '#232B35', main: '#fff', foreground: '#555' },
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
