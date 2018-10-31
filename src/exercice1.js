import React, { Component } from 'react';
import AddEntry from './exercice1/AddEntry';
import { hot } from 'react-hot-loader';

const setOptions = optionString =>
	optionString.split(' ').map(option => ({
		value: option,
		label: option.charAt(0).toUpperCase() + option.slice(1)
	}));

class Exercice1 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				Select one or 2 feelings
				<AddEntry />
				<h3>1. Take some time to get familiar with all these emotions</h3>
				<h3>
					2. Describe this feeling. The best way to do this is say it aloud.
				</h3>
				<p>Different ways to do that:</p>
				<ul>
					<li>Using a metaphor, e.g. "The fear I feel is like a ...";</li>
					<li>Telling a simple story about this feeling;</li>
					<li>
						Describing mental and phisical sensations connected with that state
						of mind.
					</li>
				</ul>
			</div>
		);
	}
}
export default hot(module)(Exercice1);
