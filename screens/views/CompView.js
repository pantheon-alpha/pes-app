import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/images/competitions/wing1.svg'
import Icon from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useState } from 'react'

import Matchday from '../../components/competitionElements/Matchday'

const Container = styled.View`
  flex: 1;
  background-color: #161616;
  align-items: center;
  //justify-content: center;
`
const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: 40px;
    left: 20px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    //background-color: #282828;
    align-items: center;
    justify-content: center;
`

const HeadContainer = styled.View`
    flex: 1;
    background-color: #161616;
    align-items: center;
    justify-content: center;
    width: 100%;
    //border: 2px solid #F4F2E0;
`
const HeadText = styled.Text`
    font-size: 20px;
    color: #F4F2E0;
    font-weight: 500;
    margin-top: 15px;
    line-height: 30px;
`

const BodyContainer = styled.View`
    flex: 2;
    width: 100%;
    background-color: #161616;
    align-items: center;
    //justify-content: center;
`

const TabContainer = styled.View`
    //flex: 1;
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    background-color: #282828;

    //border: 2px solid #F4F2E0;
`
const Tab = styled.TouchableOpacity`
    width: 20%;
    height: 100%;
    align-items: center;
    justify-content: center;
    //background-color: #282828;

    //border: 2px solid #F4F2E0;
`

const TabText = styled.Text`
    font-size: 12px;
    color: #F4F2E0;
`


const CompView = (props) => {

    const [activeTab, setActiveTab] = useState(0)

    const handleTab = (tab) => {
        setActiveTab(tab)
    }

    return (
        <Container>
            <HeadContainer>
                <BackButton onPress={() => props.navigation.goBack()}>
                    <Icon name="leftcircleo" size={30} color="#F4F2E0" />
                </BackButton>
                <Logo width={100} height={100} />
                <HeadText>
                    {props.route.params.comp}
                </HeadText>
            </HeadContainer>
            <BodyContainer>
                <TabContainer>
                    <Tab
                        onPress={() => handleTab(0)}
                    >
                        <TabText>Matchday</TabText>
                    </Tab>
                    <Tab
                        onPress={() => handleTab(1)}
                    >
                        <TabText>Table</TabText>
                    </Tab>
                    <Tab
                        onPress={() => handleTab(2)}
                    >
                        <TabText>Fixtures</TabText>
                    </Tab>
                    <Tab
                        onPress={() => handleTab(3)}
                    >
                        <TabText>Rules</TabText>
                    </Tab>
                    <Tab
                        onPress={() => handleTab(4)}
                    >
                        <TabText>Teams</TabText>
                    </Tab>
                </TabContainer>

                {activeTab === 0 &&
                    <Matchday />
                }
                {activeTab === 1 &&
                    <View>
                        <Text>Table</Text>
                    </View>
                }
                {activeTab === 2 &&
                    <View>
                        <Text>Fixtures</Text>
                    </View>
                }
                {activeTab === 3 &&
                    <View>
                        <Text>Rules</Text>
                    </View>}
                {activeTab === 4 &&
                    <View>
                        <Text>Teams</Text>
                    </View>
                }
            </BodyContainer>
        </Container>
    )
}

export default CompView