import React, {Component} from 'react';
import Body from '../body/body';
import Header from '../header/header';
import './app.css';

export default class App extends Component {
	
	render() {
		return (
			<>
				<Header/>
				<Body/>
			</>
			
		)
	}
}