import React from 'react'
import MainScreen from './screens/main'
import { ThemeProvider } from '@mui/material/styles'
import theme from './themes'

const AppProvider = (props) => {
  return (
    <ThemeProvider theme={theme()}>
      <MainScreen/>
    </ThemeProvider>
  )
}

export default AppProvider