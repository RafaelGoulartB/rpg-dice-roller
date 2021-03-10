import React, { createContext, ReactNode, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

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
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    async function fetchTheme() {
      const storedTheme = await AsyncStorage.getItem('@is_dark')
      var isTrueSet = storedTheme === 'true'
      setIsDark(isTrueSet || false)
    }
    fetchTheme()
  }, [])

  async function toggleDark() {
    try {
      const jsonIsDark = JSON.stringify(!isDark)
      await AsyncStorage.setItem('@is_dark', jsonIsDark)
    } catch (e) {
      console.log(`Error trying add theme to async storage: ${e}`)
    }

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
