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
						<input type="submit" value="Add" />
					</select>
				</form>
				<ul>
					<li>mother's name</li>
					<li>father's name</li>
				</ul>

				<p>
					Is your level of self-confidence stable or maybe dependent on external
					factors?
				</p>
				<p>
					Around which people do you feel the most confident and around which do
					you feel bad and worthless?
				</p>
				<p>How are you affected by your successes and failures?</p>
			</div>
		);
	}
}
export default hot(module)(Exercice5);
