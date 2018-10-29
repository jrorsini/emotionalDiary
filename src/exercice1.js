import React, { Component } from 'react';
import AddEntry from './exercice1/AddEntry';

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
	/**
		Handle input saving and updates UI DOM.
		Also checks wether all informations and filled out
	 */
	handleAddEntry(e) {
		e.preventDefault();
		const emotion = e.target.elements.emotion.value;
		const trigger = e.target.elements.trigger.value;

		!emotion &&
			this.setState(() => ({
				errorMessage: "Your entry doesn't have any emotions"
			}));
		!trigger &&
			this.setState(() => ({
				errorMessage: "Your entry doesn't have any trigger"
			}));

		this.setState(({ entries, triggers }) => ({
			entries: entries.concat({ emotion, trigger }),
			triggers:
				triggers.indexOf(trigger) === -1 ? triggers.concat(trigger) : triggers
		}));
	}

	render() {
		return (
			<div>
				<AddEntry
					handleAddEntry={this.handleAddEntry}
					errorMessage={this.state.errorMessage}
					triggers={this.state.triggers}
					inputs={this.state.inputs}
				/>
			</div>
		);
	}
}
export default Exercice1;
