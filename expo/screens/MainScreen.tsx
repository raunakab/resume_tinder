import React, { Component, useState } from 'react';
import {
	StyleSheet,
	Text,
    View,
    TouchableOpacity,
    Button,
    TouchableHighlight,
    Image
} from 'react-native';
import firebase from 'firebase';
import {
    NavigationScreenProp,
    NavigationState,
    NavigationParams,
} from 'react-navigation';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

export default class LoadingPage extends React.Component<Props> {

    render() {
        return (
            <View>
                <Image source={require('./assets/anon.png')} style={{width: 200, height: 200, borderRadius: 400/2}}></Image>

            </View>
        )
    }
}