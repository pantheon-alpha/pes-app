import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import City from '../../assets/images/teams/man-city.svg'
import Wolves from '../../assets/images/teams/wolves.svg'


const MatchdayBox = styled.View`
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    //border: 2px solid #F4F2E0;
`

const MatchdayBody = styled.View`
    width: 100%;
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
    font-size: 12px;
    color: #F4F2E0;
    font-weight: 400;
    line-height: 30px;
`

export default function Match(props) {
  return (

    <TouchableOpacity>
        <MatchdayBody>
            <TeamBox>
                <City width={20} height={20} />
                <TeamBoxText>
                    {props.homeTeam}
                </TeamBoxText>
            </TeamBox>
            <TeamBox>
                <Wolves width={20} height={20} />
                <TeamBoxText>
                    {props.awayTeam}
                </TeamBoxText>
            </TeamBox>
        </MatchdayBody>
    </TouchableOpacity>


  )
}