import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
    View,
    TouchableOpacity,
    Button,
    TouchableHighlight
} from 'react-native';
import firebase from 'firebase';
import {
    NavigationScreenProp,
    NavigationState,
    NavigationParams,
} from 'react-navigation';
import { TextInput } from 'react-native-gesture-handler';
import t from 'tcomb-form-native';
import DocumentPicker from 'react-native-document-picker';
import {createForm, formShape} from 'rc-form';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

const Form = t.form.Form;

const UserProfile = t.struct({
    name: t.String,
    dob: t.Date,
    occupation: t.String
});

export default class LoadingPage extends React.Component<Props> {  
    submitProfile = () => {
        var profileInfo = this.refs.profileForm.getValue();
    }

    render() {
        return (
            <View style={ styles.container } >
                <Form 
                ref="profileForm"
                type={UserProfile}>
                </Form>
                <TouchableOpacity 
                style={styles.button}
                onPress={this.submitProfile}>
                    <Text style={styles.buttonText} >Submit</Text>
                 </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center'
    },
    buttonText: {
        fontFamily: 'Asap',
        fontSize: 12
    }

});