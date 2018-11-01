import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

class Exercice5 extends Component {
	constructor(props) {
		super(props);
	}

	submitHandler(e) {
		console.log(e.target.elements.name);
		console.log(e.target.elements.type);
	}

	render() {
		return (
			<div>
				<p>Add the most important people to your life.</p>
				<form>
					<input type="text" name="name" placeholder="Person's name" />
					<select name="type" id="">
						<option value="">life</option>
						<option value="">work</option>
						<option value="">family</option>
					</select>
					<input type="submit" value="Add" />
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

const mapStateToProps = state => state;
export default hot(module)(connect(mapStateToProps)(Exercice5));
