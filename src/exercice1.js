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
				Select form goes here
				<AddEntry />
			</div>
		);
	}
}
export default hot(module)(Exercice1);
