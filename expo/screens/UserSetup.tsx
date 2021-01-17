import React, { Component, useState } from 'react';
import {
	StyleSheet,
	Text,
    View,
    TouchableOpacity,
} from 'react-native';
import firebase from 'firebase';
import {
    NavigationScreenProp,
    NavigationState,
    NavigationParams,
} from 'react-navigation';
import { TextInput } from 'react-native-gesture-handler';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}


export default class LoadingPage extends React.Component<Props> {  

    state = {
        name: "",
        age: "",
        occupation: ""
    }
    submitButton = () => {
        if (this.state.name != null && this.state.age != null) {
            console.log(this.state.name);
            // send info the database
        }
    }

    
    render() {
        //const { name, age, occupation} = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.formLabel}>Initialize Profile</Text>
                <View>
                <TextInput
                placeholder="Full Name" placeholderTextColor= "#344566" style={styles.inputStyle}
                value={this.state.name}
                onChangeText={text => this.setState({name: text})}></TextInput>
                <TextInput
                placeholder="Age" placeholderTextColor= "#344566" style={styles.inputStyle} keyboardType="numeric"
                onChangeText={text => this.setState({age: text})}></TextInput>
                <TextInput
                placeholder="Occupation" placeholderTextColor= "#344566" style={styles.inputStyle}
                onChangeText={text => this.setState({occupation: text})}></TextInput>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => this.submitButton}>
                <Text style={styles.text}>Submit</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 0,
      },
    
      formLabel: {
        fontSize: 20,
        color: '#000000',
      },
      inputStyle: {
        marginTop: 20,
        width: 300,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: '#cd23',
      },
      formText: {
        alignItems: 'center',
        justifyContent: 'center',
        color: '#cd2394',
        fontSize: 20,
      },
      text: {
        color: '#cd2394',
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center'
      },
      button: {
        width: 100,
        height: 40,
        paddingHorizontal: 10,
        marginTop: 40,
        borderRadius: 50,
        backgroundColor: "#ac1094",
        alignItems: 'center',
        justifyContent: 'center'
      }
  });