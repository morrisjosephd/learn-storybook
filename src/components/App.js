import React, { Component } from 'react'
import styled from 'styled-components'
import { withTheme } from 'styled-components';
import { hot } from 'react-hot-loader'

class App extends Component {
    constructor(props) {
        super(props)

        console.dir(props)
    }
    render() {
        return (
            <div className='App'>
                <H1> Hello, World! </H1>
            </div>
        )
    }
}

export default App
export default withTheme(App)

const H1 = styled.div`
    color: ${props => props.theme.primary.mustard};
`