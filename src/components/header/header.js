import React, {Component} from 'react';
import Block from '../block/block';
import './header.css';

export default class Header extends Component {
	render() {
		return (
			<>
				<div className="header">
					<Block color="white" scrollTitle="Scroll down to see more"/>
				</div>
			</>
		)
	}
}