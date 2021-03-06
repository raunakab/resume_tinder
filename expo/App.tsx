// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import {
// 	GoogleSignin,
// 	GoogleSigninButton,
// 	statusCodes,
// } from '@react-native-community/google-signin';

// export default function App() {
// 	return (
//     	<View style={styles.container}>
// 			<Text>Open up App.tsx to start working on your app!</Text>
// 			<StatusBar style="auto" />
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#fff',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// });

import React from 'react';
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';
import {
	createSwitchNavigator,
	createAppContainer,
} from 'react-navigation';
import LoginPage from './screens/LoginPage';
import LoadingPage from './screens/LoadingPage';
import matching from './screens/matching';
import UserSetup from './screens/UserSetup';
import matches from './screens/matches';
import firebase from 'firebase';
import { firebaseConfig } from './config';
// import {
// 	GoogleSignin,
// 	GoogleSigninButton,
// 	statusCodes,
// } from '@react-native-community/google-signin';

const appSwitchNavigator = createSwitchNavigator({
	LoginPage: LoginPage,
	LoadingPage: LoadingPage,
	matching: matching,
	UserSetup: UserSetup,
	matches: matches,
});
const AppNavigator = createAppContainer(appSwitchNavigator);

export default class App extends React.Component {
	render() {
		// return (
		// 	<View>
		// 		<Text>Hello, world!</Text>
		// 	</View>
		// );
		return (
			<AppNavigator />
		);
	}
}
