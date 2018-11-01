import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class Exercice5 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<p>Add the most important people to your life.</p>
				<form>
					<select name="" id="">
						<input type="text" placeholder="Person's name" />
						<option value="">life</option>
						<option value="">work</option>
						<option value="">family</option>
					</select>
				</form>
				<ul>
					<li>mother's name</li>
					<li>father's name</li>
				</ul>
			</div>
		);
	}
}
export default hot(module)(Exercice5);
