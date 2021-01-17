import React from 'react';
import {
	StyleSheet,
	Text,
	View,
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
    componentDidMount() {
        this.checkIfLoggedIn();
    }

    checkIfLoggedIn = () => {
        // firebase.auth().onAuthStateChanged(user => {
        //     if (user) {
        //         // this.props.navigation.navigate('Dashboard');
        //     } else {
        //         this.props.navigation.navigate('LoginPage');
        //     }
        // });
        this.props.navigation.navigate('UserSetup');
    }

    render() {
        return (
            <View style={ styles.container } >
                <Text>LoadingPage</Text>
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
