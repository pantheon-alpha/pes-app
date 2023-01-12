import React, {Component} from "react";
import styled from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Button } from "react-native";

import { ThemeProvider } from "styled-components/native";

import Landing from "./components/auth/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import MainScreen from "./screens/MainScreen";



import firebase from "firebase/app";
import { auth, db } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { Unsubscribe } from "firebase/auth";
import Theme from "./theme";



const Stack = createNativeStackNavigator();

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };

    this.onAuthStateChanged = this.onAuthStateChanged.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(this.onAuthStateChanged);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }


  onAuthStateChanged(user) {
    this.setState({ loggedIn: !!user });
  }

  render() {

    const { loggedIn } = this.state;

    if (!loggedIn) {

      return (
          <NavigationContainer theme={Theme}>
            <Stack.Navigator initialRouteName="Landing">
              <Stack.Screen name="Landing" component={Landing} 
                options={{ headerShown: false }}
              />
              <Stack.Screen name="Register" component={Register} />
              <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
          </NavigationContainer>

        
      );
    }

    return (
      <NavigationContainer theme={Theme}>
        <Button
          title="Sign Out"
          onPress={() => auth.signOut()}
        />
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Main" component={MainScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );

  }
}

export default App;