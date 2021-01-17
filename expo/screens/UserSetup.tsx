import React from 'react';
import {Image} from 'react-native-elements';

import {
    Alert,
    Button,
	StyleSheet,
	View,
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

export default class UserSetup extends React.Component<Props> {
    render() {
        return (
            <View style = {styles.container}>
                    <Image 
                        source ={ require("../assets/icon.png") }
                        style = {styles.pfpStyle}
                        onPress = {() => Alert.alert("goodbye")}
                    />

                    <Image 
                        source ={ require("../assets/icon.png") }
                        style = {styles.matchStyle}
                        onPress = {() => Alert.alert("bye")}
                        onPress = {() => this.props.navigation.navigate('matching')}
                    />          
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        
        justifyContent: 'center',
        alignItems: 'center',

        flexDirection: 'row',
        paddingTop: 40,
        
        

    },
    // imageWrapper: {
    //     width: 1000,
    //     height: 1000,
    //     backgroundColor: 'red'
    // },
    pfpStyle: {
        // position: 'relative',
        width: 125,
        height: 125,
        // marginTop: 0,
        // marginLeft: 0,
        // paddingRight:40,
        left: 0,
        // paddingLeft: 50,
        // backgroundColor: 'blue',
        borderWidth: 2.5,
        
    },

    matchStyle: {
        // position: 'relative',
        width: 125,
        height: 125,
        // paddingLeft: 40,
        // // marginBottom: 700,
        // marginLeft: 0,
        marginLeft: 100,
        // paddingLeft: 50,
        // backgroundColor: 'blue',
        borderWidth: 2.5,
        
    },

});
