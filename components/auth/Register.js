import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native'
import styled from 'styled-components'

import firebase from 'firebase/app';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebaseConfig';
import { getFirestore, doc, setDoc } from 'firebase/firestore';





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



export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            name: ""
        }

        this.onSignUp = this.onSignUp.bind(this);
    }

    onSignUp() {
        
        const { email, password, name } = this.state;
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setDoc(doc(db, "users", result.user.uid), {
                    name,
                    email
                },
                { merge: true }
                )
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
                    placeholder="name"
                    onChangeText={(name) => this.setState({ name })}
                />
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
                    title="Register" 
                    onPress={() => this.onSignUp()} 
                />
            </Container>
            )
    }
}

export default Register