import React, { Component } from 'react';
import Select from 'react-select';

const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' }
];

class Exercice1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputs: {
				activation: 'Activation level',
				affect: 'Kind of affect',
				emotion: 'Feeling right now'
			},
			entries: [],
			triggers: [],
			errorMessage: null
		};
	}

	render() {
		return (
			<div>
				Select form goes here
				<Select options={options} />
			</div>
		);
	}
}
export default Exercice1;
