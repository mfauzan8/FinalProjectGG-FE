import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App.jsx'
import {
  BrowserRouter as Router
} from 'react-router-dom'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#063578",
        minHeight: "100vh",
        color: 'white',

      },
    },
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </ChakraProvider>
)
