import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from "styled-components";
import 'normalize.css'

import App from './components/App'
import theme from './styles/theme'

// Built from https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658
ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
)
