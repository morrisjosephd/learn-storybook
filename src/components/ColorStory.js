import React from 'react';
import styled from 'styled-components'
import 'normalize.css'

import Colors from '../styles/colors'

const ColorStory = () => (
    <div>
        <div>
            <Title>Primary</Title>
            {renderColorGroup('primary')}
        </div>
        <div>
            <Title>Secondary</Title>
            {renderColorGroup('secondary')}
        </div>
        <div>
            <Title>Neutral</Title>
            {renderColorGroup('neutral')}
        </div>
    </div>
)

const renderColorGroup = type => {
    const colors = Colors[type]
    return <ul style={{display: 'flex'}}>
        {Object.entries(colors).map(color => {
            const [colorName, colorCode] = color
            return <ColorCardContainer key={colorName} colorName={colorName}>
                        {colorName}
                        <ColorCard key={colorCode} colorCode={colorCode} />
                        {colorCode}
                    </ColorCardContainer>
        })}
    </ul>
}

const ColorCard = styled.li`
    background-color: ${props => props.colorCode}
    width: 90px;
    height: calc(35px * 2.5);
    list-style-type: none;
    box-shadow: 5px 5px 5px #d3d3d3;
    margin: 8px 0;
    border-radius: 50%;
`

const ColorCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    font-size: 12px;
    color: #808080;
    text-align: center;
    text-transform: capitalize;
    margin: 0 8px;
`

const Title = styled.p`
    font-family: sans-serif;
    color: #808080;
    margin-bottom: 0;
    margin-left: 8px;
`

export default ColorStory;