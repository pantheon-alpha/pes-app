import React, {Component} from "react";
import styled from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Button } from "react-native";

import Landing from "./components/auth/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";



import firebase from "firebase/app";
import { auth, db } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { Unsubscribe } from "firebase/auth";



const Stack = createNativeStackNavigator();


// export class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       loaded: false,
//     };
//   }

//   render() {
//     const { loggedIn, loaded } = this.state;
//     // if (!loaded) {
//     //   return(
//     //     <View style={{ flex: 1, justifyContent: "center" }}>
//     //       <Text>Loading</Text>
//     //     </View>
//     //   );
//     // }

//     if (!loggedIn) {
//       return (
//         <NavigationContainer>
//           <Stack.Navigator initialRouteName="Landing">
//             <Stack.Screen name="Landing" component={LandingScreen} 
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen name="Register" component={RegisterScreen} />
//             <Stack.Screen name="Login" component={LoginScreen} />
//           </Stack.Navigator>
//         </NavigationContainer>
//       );
//     }

//     return (
//       <View style={{ flex: 1, justifyContent: "center" }}>
//         <Text>User is logged in</Text>
//       </View>
//     ); 

    
//   }
// }

// const signOut = () => {

//   auth.signOut().then(() => {
//     // Sign-out successful.
//   }).catch((error) => {
//     // An error happened.
//   });
// }

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
        <NavigationContainer>
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
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>User is logged in</Text>
        <Button
          title="Logout"
          onPress={() => auth.signOut()}
        />
      </View>
    );

  }
}

export default App;