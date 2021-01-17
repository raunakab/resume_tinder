import React from 'react';
import {
	createSwitchNavigator,
	createAppContainer,
} from 'react-navigation';
import LoginPage from './screens/LoginPage';

const appSwitchNavigator = createSwitchNavigator({
	LoginPage: LoginPage,
});
const AppNavigator = createAppContainer(appSwitchNavigator);

export default class App extends React.Component {
	render() {
		return ( <AppNavigator /> );
	}
}
