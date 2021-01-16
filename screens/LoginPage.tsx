import React from 'react';
import {
    ActivityIndicator,
	StyleSheet,
	Text,
	View,
} from 'react-native';

export default class LoginPage extends React.Component {
    render() {
        return (
            <View style={ styles.container } >
                <ActivityIndicator size='large'/>
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
