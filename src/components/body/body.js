import React, {Component} from 'react';
import Block from '../block/block';
import './body.css';

export default class Body extends Component {
	render() {
		return (
			<div className="body" id="about">
				<Block color="dark" scrollTitle="Keep scrolling, there is still more to come"/>
				<div className="content-block">
					<div className="content-img"></div>
					<div className="content-text">
						<h1>About me</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
						<h3>Jason Wood</h3>
					</div>
				</div>
			</div>
		)
	}
}