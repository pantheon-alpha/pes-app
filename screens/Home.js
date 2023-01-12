import { Text, View } from 'react-native'
import React, { Component } from 'react'
import styled from 'styled-components'

const StyledView = styled.View`
  flex: 1;
  background-color: #161616;
  padding: 20px;
`
const Header = styled.Text`
  font-size: 48px;
  color: #F4F2E0;
  width: 100%;
  margin-bottom: 20px;


`

const StyledText = styled.Text`
  font-size: 24px;
  color: #F4F2E0;
`

export default class Home extends Component {
  render() {
    return (
      <StyledView>
        <Header>Home</Header>
        <StyledText>Home</StyledText>
      </StyledView>
    )
  }
}