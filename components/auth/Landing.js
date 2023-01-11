import React from 'react'
import { View, Text, Button } from 'react-native'
import styled from 'styled-components'

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;


export default function Landing({ navigation}) {
  return (
    <Container>
        <Button
            title="Login"
            onPress={() => navigation.navigate("Login")}
        />
        <Button
            title="Register"
            onPress={() => navigation.navigate("Register")}
        />
    </Container>
  )
}
