import React from 'react';
import AddEntry from './AddEntry';
import EntryList from './EntryList';

/**
	Class representing the entry input Component named as EmotionalDiary
 */
export default class EmotionalDiary extends React.Component {
	state = {
		inputs: {
			activation: 'Activation level',
			affect: 'Kind of affect',
			emotion: 'Feeling right now'
		},
		entries: [],
		triggers: [],
		errorMessage: null
	};

	/**
		Set up data from Localstorage if there is any.
	 */
	componentDidMount() {
		const entries = JSON.parse(localStorage.getItem('entries'));
		if (entries) {
			this.setState(prevState => ({
				entries: entries
			}));
		}
	}

	/**
		Update localStorage data when component updates.
	 */
	componentDidUpdate() {
		localStorage.setItem('entries', JSON.stringify(this.state.entries));
	}

	/**
		Handle input saving and updates UI DOM.
		Also checks wether all informations and filled out
	 */
	handleAddEntry = e => {
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

		this.setState(prevState => ({
			entries: prevState.entries.concat({
				emotion,
				trigger
			}),
			triggers:
				prevState.triggers.indexOf(trigger) === -1
					? prevState.triggers.concat(trigger)
					: prevState.triggers
		}));
	};

	render() {
		return (
			<div>
				<AddEntry
					handleAddEntry={this.handleAddEntry}
					errorMessage={this.state.errorMessage}
					triggers={this.state.triggers}
					inputs={this.state.inputs}
				/>
				<EntryList entries={this.state.entries} />
			</div>
		);
	}
}
import React from 'react';
import AddEntry from './AddEntry';
import EntryList from './EntryList';

/**
	Class representing the entry input Component named as EmotionalDiary
 */
export default class EmotionalDiary extends React.Component {
	state = {
		inputs: {
			activation: 'Activation level',
			affect: 'Kind of affect',
			emotion: 'Feeling right now'
		},
		entries: [],
		triggers: [],
		errorMessage: null
	};

	/**
		Set up data from Localstorage if there is any.
	 */
	componentDidMount() {
		const entries = JSON.parse(localStorage.getItem('entries'));
		if (entries) {
			this.setState(prevState => ({
				entries: entries
			}));
		}
	}

	/**
		Update localStorage data when component updates.
	 */
	componentDidUpdate() {
		localStorage.setItem('entries', JSON.stringify(this.state.entries));
	}

	/**
		Handle input saving and updates UI DOM.
		Also checks wether all informations and filled out
	 */
	handleAddEntry = e => {
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

		this.setState(prevState => ({
			entries: prevState.entries.concat({
				emotion,
				trigger
			}),
			triggers:
				prevState.triggers.indexOf(trigger) === -1
					? prevState.triggers.concat(trigger)
					: prevState.triggers
		}));
	};

	render() {
		return (
			<div>
				<AddEntry
					handleAddEntry={this.handleAddEntry}
					errorMessage={this.state.errorMessage}
					triggers={this.state.triggers}
					inputs={this.state.inputs}
				/>
				<EntryList entries={this.state.entries} />
			</div>
		);
	}
}
