import React, { createContext, ReactNode, useState } from 'react'

interface ThemeContextData {
  isDark: boolean
  toggleDark: () => void
}
interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext({} as ThemeContextData)

export function ThemeProvider({
  children
}: ThemeProviderProps): React.ReactElement {
  const [isDark, setIsDark] = useState(true)

  function toggleDark() {
    setIsDark(!isDark)
  }

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleDark
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
