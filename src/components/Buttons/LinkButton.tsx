import { StatusBar } from 'expo-status-bar'
import React from 'react'
import styled, { css } from 'styled-components/native'
import { colors } from '../../colors'
import MediumText from '../Texts/MediumText'
import { ButtonProps } from './types'


const StyledButton = styled.TouchableHighlight`
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100%;
    
   
   
`
const StyledButtonText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${colors.primary};
    

`


export default function LinkButton({style, text, onPress} : ButtonProps) {
  return (
    <StyledButton style={style} onPress={onPress} >
        <StyledButtonText>
            {text}
        </StyledButtonText>
    </StyledButton>
  )
}
