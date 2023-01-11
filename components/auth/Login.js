import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native'
import styled from 'styled-components'

import firebase from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebaseConfig';


const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

`;

const Input = styled.TextInput`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;

`;



export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }

        this.onSignIn = this.onSignIn.bind(this);
    }

    onSignIn() {
        const { email, password } = this.state;
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result)
            })

            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <Container>
                <Input
                    placeholder="email"
                    onChangeText={(email) => this.setState({ email })}
                />
                <Input
                    placeholder="password"
                    secureTextEntry={true}  // hides the password
                    onChangeText={(password) => this.setState({ password })}
                />

                <Button 
                    title="Login" 
                    onPress={() => this.onSignIn()} 
                />
            </Container>
            )
    }
}

export default Login