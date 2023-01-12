import { View, Text, Image } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Home from './Home'
import Competitions from './Competitions'
import Discover from './Discover'
import Profile from './Profile'
import Community from './Community'
import Theme from '../theme'

const Tab = createBottomTabNavigator()




const MainScreen = () => {

  return (
    <Tab.Navigator
      initialRouteName="Home"
      useTheme = {Theme}
      screenOptions={
        {
          tabBarActiveTintColor: Theme.colors.PN_WHITE,
          tabBarInactiveTintColor: Theme.colors.PN_WHITE,
          tabBarShowLabel: false,
          headerShown: false,

          tabBarStyle: {
            backgroundColor: Theme.colors.PN_BLACK_TWO,
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
            height: 60,
            paddingBottom: 5,
            paddingTop: 5,
          },
        }
      }
    >
      <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarLabel: 'Home',
          tabBarShowLabel: false,
          headerShown: false,

          backgroundColor: Theme.colors.PN_BLACK_TWO,

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}

        screenOptions={{
          backgroundColor: Theme.colors.PN_BLACK_TWO,
        }}
      />
      <Tab.Screen name="Competitions" component={Competitions} 
        options={{
          tabBarLabel: 'Competitions',
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="trophy" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Discover" component={Discover}
        
        options={{
          tabBarLabel: 'Discover',
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="soccer" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Community" component={Community}
        options={{
          tabBarLabel: 'Community',
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-group" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default MainScreen