import React from 'react'
import Routes from './src/routes'
import { ThemeProvider } from './src/contexts/ThemeContext'

const App: React.FC = () => (
  <ThemeProvider>
    <Routes />
  </ThemeProvider>
)

export default App
