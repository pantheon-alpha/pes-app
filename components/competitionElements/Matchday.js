import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import { SelectList } from 'react-native-dropdown-select-list'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import City from '../../assets/images/teams/man-city.svg'
import Wolves from '../../assets/images/teams/wolves.svg'

import MatchList from '../../data/MatchList'
import MatchdayOne from '../../data/MatchdayOne'

import Match from '../../components/competitionElements/Match'


const Container = styled.View`
    flex: 1;
    width: 100%;
    height: auto;
    background-color: #161616;
    align-items: flex-start;
    //padding: 30px;
    //align-items: center;
    //justify-content: center;
`
const DropdownBox = styled.View`
    width: 100%;
    height: auto;
    background-color: #282828;
    align-items: center;
    padding: 10px 0;
    //justify-content: center;
    //border: 2px solid #F4F2E0;
`
const MatchdayBox = styled.View`
    flex: 1;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    //border: 2px solid #F4F2E0;
`
const MatchdayHeader = styled.View`
    width: 100%;
    height: auto;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding:10px 5px;
    //border: 2px solid red;
    border: 1px solid #161616;
    border-bottom-color: #282828;
`
const MatchdayHeaderText = styled.Text`
    font-size: 12px;
    color: #F4F2E0;
    font-weight: 500;
    line-height: 30px;
`
const MatchdayHeaderSubText = styled.Text`
    font-size: 10px;
    color: #848484;
    font-weight: 500;
    line-height: 30px;
`

const MatchdayBody = styled.View`
    width: 100%;
    height: auto;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding:10px 5px;
    //border: 2px solid red;
    border: 1px solid #161616;
    border-bottom-color: #282828;
`

const TeamBox = styled.View`
    width: 100%;
    height: auto;
    flex-direction: row;
    align-items: center;
    padding:5px 5px;
    //border: 2px solid red;
`
const TeamBoxText = styled.Text`
    margin-left: 10px;
    font-size: 14px;
    color: #F4F2E0;
    font-weight: 500;
    line-height: 30px;
`


export default function Matchday() {

    const [selected, setSelected] = useState("Matchday 1")

    const options = [
        { label: "Matchday 1", value: "Matchday 1" },
        { label: "Matchday 2", value: "Matchday 2" },
        { label: "Matchday 3", value: "Matchday 3" },
        { label: "Matchday 4", value: "Matchday 4" },
        { label: "Matchday 5", value: "Matchday 5" },
        { label: "Matchday 6", value: "Matchday 6" },
        { label: "Matchday 7", value: "Matchday 7" },
        { label: "Matchday 8", value: "Matchday 8" },
        { label: "Matchday 9", value: "Matchday 9" },
        { label: "Matchday 10", value: "Matchday 10" },
    ]

  return (
    <Container>
        <DropdownBox>
            <SelectList
                setSelected={(val) => setSelected(val)} 
                data={options} 
                save="value"
                selected={selected}

                placeholder={selected}

                arrowicon={
                    <Icon name="down" size={10} color="#F4F2E0" 
                    style={{alignItems: 'center', marginRight: 45, paddingVertical: 5 }}/>
                
                }

                // Styling
                boxStyles={{
                    width: '100%',
                    height: 50,
                    //margin: 10,
                    backgroundColor: "#161616",
                    borderRadius: 0,
                    borderWidth: 2,
                    borderColor: "#fff",
                    borderColor: "#161616",
                    marginLeft: 0,
                    alignItems: "center",
                    justifyContent: "flex-start",
                    }}
                
                dropdownStyles={{
                        width: 'auto',
                        height: 400,
                        backgroundColor: "#161616",
                        borderRadius: 0,
                        //borderWidth: 2,
                        borderColor: "#161616",
                        paddingBottom: 0,
                        //margin: 10,
                    }}

                inputStyles={{
                        width: '100%',
                        height: 50,
                        //margin: 10,
                        color: "#F4F2E0",
                        flexDirection: "row",
                        fontSize: 12,
                        fontWeight: "400",
                        textAlignVertical: "center",
                        paddingLeft: 40,
                        paddingVertical: 5,
                    }}
            
                dropdownTextStyles={{
                    color: "#F4F2E0",
                    textAlign: "left",
                    //textAlignVertical: "center",
                    fontSize: 12,
                    fontWeight: "400",
                    paddingHorizontal: 40,
                    paddingVertical: 5,
                    }}
                search={false}
            />
        </DropdownBox>

        <MatchdayBox>
            <MatchdayHeader>
                <MatchdayHeaderText>{selected}</MatchdayHeaderText>
            </MatchdayHeader>
            <FlatList

                style={{width: '100%', height: 'auto'}}
                showsVerticalScrollIndicator={false}
                data={MatchdayOne}
                renderItem={({ item }) => (
                    <Match
                        homeTeam={item.home}
                        awayTeam={item.away}
                    />
                )}
                keyExtractor={item => item.id}
            />
        </MatchdayBox>
    </Container>
  )
}