import { Text, View, FlatList } from 'react-native'
import React, { Component } from 'react'
import styled from 'styled-components'
import { Table, Row, Rows } from 'react-native-table-component'

import Competition from '../components/Competition'

import compList from '../data/CompList'


const StyledView = styled.View`
  flex: 1;
  background-color: #161616;
  padding: 20px 20px 0 20px;
`
const Header = styled.Text`
  font-size: 48px;
  color: #F4F2E0;
  width: 100%;
  margin-bottom: 20px;

  //font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 59px;
`

const TabContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  margin: 20px 0;

  //border: 2px solid white;
`
const Tab = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: #282828;
  border-radius: 10px;
  margin: 0 5px;
`
const TabText = styled.Text`
  font-size: 13px;
  font-weight: 500;
  color: #F4F2E0;
`

const StyledText = styled.Text`
  font-size: 18px;
  color: #fff;
`

export default class Competitions extends Component {
  render() {
    return (
      <StyledView>
        <Header>Competitions</Header>

        <TabContainer>
          <Tab>
            <TabText>Live</TabText>
          </Tab>
          <Tab>
            <TabText>All time</TabText>
          </Tab>
        </TabContainer>

        <FlatList
          //style={{ width: '100%', borderColor: 'white', borderWidth: 2 }}

          showsVerticalScrollIndicator={false}
          data={compList}
          renderItem={({ item, index }) => (
            <Competition
              navigation={this.props.navigation}
              serial={index + 1}
              name={item.name}
              teams={item.teams}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />

      </StyledView>
    )
  }
}