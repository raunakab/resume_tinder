import React from 'react';
import { Image } from 'react-native-elements';

import {
    Button,
	StyleSheet,
    View,
    Text,
} from 'react-native';
import {
    NavigationScreenProp,
    NavigationState,
    NavigationParams,
} from 'react-navigation';
import * as Google from 'expo-google-app-auth';
import { firebaseConfig } from '../config';
import firebase from 'firebase/app';
import 'firebase/auth';
import database from '@react-native-firebase/database';

if (firebase.apps.length == 0) {
    console.log('using new instance');
    firebase.initializeApp(firebaseConfig);
} else {
    console.log('using old instance');
    firebase.app();
}

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

export default class LoginPage extends React.Component<Props> {
    // technically, googleUser should be of type LoginResultSuccess, but that's saying "getBasicProfile"
    // does not exist on that object so I've just modified googleUser to be of type any...
    // - Raunak
    isUserEqual = (googleUser: any, firebaseUser: firebase.User | null): boolean => {
        if (firebaseUser) {
            const providerData: (firebase.UserInfo | null)[] = (firebaseUser !).providerData;
            for (var i = 0; i < providerData.length; i++) {
                if (providerData[i]
                    && (providerData[i] !).providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID
                    // && (providerData[i] !).uid === googleUser.getBasicProfile().getId()
                    ) {
                    // We don't need to reauth the Firebase connection.
                    return true;
                }
            }
        }
        return false;
    }

    signInWithGoogleAsync = async () => {
        try {
            const result: Google.LogInResult = await Google.logInAsync({
                iosClientId: '911883068587-aa931gikh9g1tk3op81t8kai970d5e2d.apps.googleusercontent.com',
                behavior: 'web',
                scopes: [
                    'profile',
                    'email'
                ],
            });
            if (result.type  === 'success') {
                // await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
                // console.log(result);
                firebase.auth().onAuthStateChanged(async (firebaseUser: firebase.User | null) => {
                    // const userSignedIn: boolean = this.isUserEqual(result, firebaseUser);
                    const userSignedIn: boolean = false;
                    if (userSignedIn) {
                        // ... Do something here!
                    } else {
                        const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken, result.accessToken);
                        firebase.auth().signInWithCredential(credential)
                        .then<void>((userResult: firebase.auth.UserCredential): void => {
                            // firebase.database().ref('/users/' + userResult.user!.uid).set({
                            //     gmail: result.user.email,
                            //     // firstName: userResult!.additionalUserInfo!.profile!.given_name
                            // });
                            // const ref = database().ref('/users/');
                            // firebase.database().ref('/users/').set(1);
                        })
                        .catch<void>((error: any): void => {
                            console.log(error);
                            alert('failed');
                            // Handle Errors here.
                            // const errorCode: any = error.code;
                            // const errorMessage: any = error.message;
                            // // The email of the user's account used.
                            // const email: any = error.email;
                            // // The firebase.auth.AuthCredential type that was used.
                            // const credential: any = error.credential;
                            // // ...
                        });
                    }
                    this.props.navigation.navigate('UserSetup');
                });
            }
        } catch (error) {
        //   alert('login: Error:' + message);
            console.log(error);
            alert(error.message);
        }
    }

    render() {
        return (
            <View style = {styles.container}>
                <Image 
                    source ={ require("../assets/kindling4.png") }
                    style = {{minWidth: 290, minHeight: 400}}
                />

                <View style = {styles.buttonStyle}><Button title='Sign In with Google' color="white" onPress={() => {
                    this.signInWithGoogleAsync();
                }}/></View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: -30
    },
    buttonStyle: {
        marginTop: 100,
        backgroundColor: '#ed6b61',
        borderRadius: 15,
        height: 40,
        width: 200
    }
});
