import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/images/competitions/wing1.svg'
import KnockOut from '../assets/images/competitions/knockouts.svg'

const StyledView = styled.View`
    background-color: #282828;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: auto;
    height: 60px;
    margin: 5px;
    padding: 8px 20px;
    border-radius: 10px;

    //border: 2px solid white;
`

const StyledText = styled.Text`
    font-size: 15px;
    color: #F4F2E0;
`


export default function competition() {
  return (
    <StyledView>
        <StyledText>1</StyledText>
        <Logo width={30} height={35} />
        <StyledText>PES Season 10</StyledText>
        <StyledText>15</StyledText>
        <KnockOut width={20} height={20} />
    </StyledView>
  )
}