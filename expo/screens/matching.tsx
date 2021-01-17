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

export default class matching extends React.Component<Props> {
    render() {
        return (
            <View style={styles.verticalDiv}>
                <View style = {styles.horizontalDiv}>
                        <Image 
                            source ={ require("../assets/pfp.png") }
                            style = {styles.pfpStyle}
                            onPress = {() => this.props.navigation.navigate('UserSetup')}
                        />

                        <View style = {styles.buttonStyle}><Button color= 'white' title='Matches' onPress = {() => this.props.navigation.navigate('matches')}/></View>
                </View>
                <View style = {styles.horizontalDiv}>
                    <Image 
                        source ={ require("../assets/chevron.png") }
                        style = {styles.leftChevron}
                        onPress = {() => Alert.alert("Insect!")}
                    />
                    <Image 
                        source ={ require("../assets/kindling4.png") }
                        style = {styles.pdfStyle}
                    />
                                        <Image 
                        source ={ require("../assets/chevron.png") }
                        style = {styles.rightChevron}
                        onPress = {() => Alert.alert("YAAS!")}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    horizontalDiv: {
        
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: -40,

    },
    verticalDiv: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 100,
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
        // paddingLeft: 50,
        // backgroundColor: 'blue',
        borderWidth: 2.5,
    },
    buttonStyle: {
        backgroundColor: '#ed6b61',
        borderRadius: 15,
        marginLeft: 150,
        height: 40,
        width: 100,
    },
    pdfStyle: {
        // position: 'relative',
        marginTop: 50,
        width: 300,
        height: 550,
        // paddingLeft: 50,
        // backgroundColor: 'blue',
        borderWidth: 2.5,
    },
    leftChevron: {
        width: 60,
        height: 90,
        transform: [{rotate: '0deg'}]
    },
    rightChevron: {
        width: 60,
        height: 90,
        transform: [{rotate: '180deg'}]
    },

});
