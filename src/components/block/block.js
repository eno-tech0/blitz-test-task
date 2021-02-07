import React, {Component} from 'react';
import './block.css';

export default class Block extends Component {

	showMenu = () => {
		document.querySelector('.header .block-links').classList.toggle('flex');
	}

	render() {
		const {color, scrollTitle} = this.props;

		const link = (title, href) => {
			return <a className={color} href={href}>{title}</a>
		}
		return (
			<>
				<div className="block-links">
					{link('Home', '/')}
					{link('About me', '#about')}
					{link('Portfolio', '/')}
					{link('Contact', '/')}
				</div>
				<div className="burger white" onClick={() => this.showMenu()}><span>∞</span> Menu</div>

				<hr className={color}></hr>

				<div className="swipe-arrow">
					<p className={color}>{scrollTitle}</p>
					<div className={color}></div>
				</div>
			</>
		)
	}
}