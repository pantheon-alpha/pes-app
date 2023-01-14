import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import styled from 'styled-components'
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_100Thin, Montserrat_200ExtraLight, Montserrat_300Light, Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';


export default function Profile() {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, { fontFamily: 'Montserrat_700Bold' }]}>
          Profile
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    padding: 30,
    paddingVertical: 30,
  },
  text: {
    fontSize: 48,
    color: '#F4F2E0',
  },
});