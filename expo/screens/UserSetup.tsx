import React, { Component, useState } from 'react';
import {
	StyleSheet,
	Text,
    View,
    TouchableOpacity,
     SafeAreaView, ScrollView,
} from 'react-native';
import firebase from 'firebase';
import {
    NavigationScreenProp,
    NavigationState,
    NavigationParams,
} from 'react-navigation';
import { TextInput } from 'react-native-gesture-handler';
import Slider from '@react-native-community/slider';
import Constants from 'expo-constants';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}


export default class LoadingPage extends React.Component<Props> {  

    state = {
        name: "",
        age: "",
        occupation: ""
    }
    // submitButton = () => {
    //     this.props.navigation.navigate('matching');
    // }

    
    
    render() {
        // const [state, setState] = useState({ x: 0.3 });
        //const { name, age, occupation} = this.state;
        return (
            <View style={styles.verticalDiv}>
                <Text style={styles.formLabel}>Edit Profile</Text>
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
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('matching')}>
                <Text style={styles.text}>Submit</Text></TouchableOpacity>
      
                <Text style={{fontSize:30}}>Feedback:</Text>
                <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    
                <View style = {styles.profile}>
                        <Text style={{fontSize:20}}>Resume Version 1.2</Text>
                        <Text>Ecnelis fo dnuos eht nihtiw

                        sniamer llits.

                        Niarb ym ni detnalp saw taht noisiv eht dna,

                        gnipeels saw I elihw sdees sti tfel,

                        gnipeerc yltfos noisiv a esuaceb.

                        Niaga uoy htiw klat ot emoc ev'i.</Text>
                    
                    <Text style={{fontSize:20}}>How valuable was this feedback?</Text>
                    <Slider
                        style={{width: 200, height: 40}}
                        minimumValue={0}
                        maximumValue={1}
                        // minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                    />
                    </View>

                    <View style={{height:50}}></View>

                    <View style = {styles.profile}>
                        <Text style={{fontSize:20}}>Resume Version 1.1</Text>
                        <Text>Suckwe balls lmao.</Text>
                    
                    <Text style={{fontSize:20}}>How valuable was this feedback?</Text>
                    <Slider
                        style={{width: 200, height: 40}}
                        minimumValue={0}
                        maximumValue={1}
                        // minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                    />
                    </View>

                    <View style={{height:0}}></View>

                    <View style = {styles.profile}>
                        <Text style={{fontSize:20}}>Resume Version 1.0</Text>
                        <Text>Gret job! Maybe try to improve the connotation when 
                            describing your group work to leave a more positive impression. :)</Text>
                    
                    <Text style={{fontSize:20}}>How valuable was this feedback?</Text>
                    <Slider
                        style={{width: 200, height: 40}}
                        minimumValue={0}
                        maximumValue={1}
                        // minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                    />
                    </View>
                </ScrollView>
                </SafeAreaView>
                
                
            </View>

        )
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
      },
      profile: {
        height: 150,
        // marginTop:-100
      },
      container: {
          height: 450
        // flex: 1,
        // marginTop: Constants.statusBarHeight,
      },
      scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
      },
  });