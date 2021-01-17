import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import React from 'react';
import {
    ActivityIndicator,
    Button,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import {
    NavigationScreenProp,
    NavigationState,
    NavigationParams,
} from 'react-navigation';
import * as Google from 'expo-google-app-auth';
import { firebaseConfig } from '../config';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

export default class LoginPage extends React.Component<Props> {
    signInWithGoogleAsync = async () => {
        // try {
        //     const result = await Google.logInAsync({
        //         behaviour: 'web',
        //         iosClientID: '911883068587-aa931gikh9g1tk3op81t8kai970d5e2d.apps.googleusercontent.com',
        //         scopes: [
        //             'profile',
        //             'email',
        //         ],
        //     });

        //     if (result.type === 'success') {
        //         return result.accessToken;
        //     } else {
        //         return {
        //             cancelled: true,
        //         }
        //     }
        // } catch (e) {
        //     alert('failed');
        //     console.log("asdfadsfasdfasdfasdfsdaf");
        //     return {
        //         error: true,
        //     }
        // }
        // const { type, accessToken, user } = await Google.logInAsync({
        const result = await Google.logInAsync({
            iosClientId: '911883068587-aa931gikh9g1tk3op81t8kai970d5e2d.apps.googleusercontent.com',
            scopes: [
                'profile',
                'email'
            ],
        });

        
    }

    render() {
        return (
            <View style={ styles.container } >
                <Button title='Sign In with Google' onPress={() => {
                    // alert('button pressed');
                    this.signInWithGoogleAsync();
                    //this.props.navigation.navigate('LoadingPage');
                }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
