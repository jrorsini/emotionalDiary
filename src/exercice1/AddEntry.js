import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const setOptions = optionString =>
	optionString.split(' ').map(option => ({
		value: option,
		label: option.charAt(0).toUpperCase() + option.slice(1)
	}));

const normal_neutral = [];

class AddEntry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activation: '',
			affect: '',
			emotion: '',
			trigger: ''
		};
	}

	handleActivationChange(activation) {
		activation
			? this.setState({ activation })
			: this.setState({
					activation,
					affect: '',
					emotion: ''
			  });
	}
	handleAffectChange(affect) {
		this.setState({ affect, emotion: '' });
	}
	handleEmotionChange(emotion) {
		this.setState({ emotion });
	}

	/**
	Set emotion's options according to the two previous inputs.
 */
	setEmotionOptions(activation, affect) {
		const high_neutral = 'excited surprised rapt active';
		const normal_neutral = 'happy delighted glad joyful hearty satisfied';
		const normal_positive = 'happy delighted glad joyful hearty satisfied';
		const high_positive =
			'enthusiastic cheerful excited euphoric animated peppy';
		const high_negative =
			'jealous disgusted confused stressed angry frightened upset jittery concerned contradictory alarmed furious';

		switch (activation) {
			case 'high':
				switch (affect) {
					case 'positive':
						return setOptions(high_positive);
					case 'neutral':
						return setOptions(high_neutral);
					case 'negative':
						return setOptions(high_negative);
				}
				break;
			case 'normal':
				switch (affect) {
					case 'positive':
						return setOptions(normal_positive);
					case 'negative':
						return setOptions(normal_neutral);
				}
				break;
			case 'low':
				switch (affect) {
					case 'positive':
						break;
					case 'neutral':
						break;
					case 'negative':
						break;
				}
				break;
		}
	}

	render() {
		const { activation, affect, emotion, trigger } = this.state;

		return (
			<div className="container">
				{this.props.errorMessage && <p>{this.props.errorMessage}</p>}
				<form onSubmit={this.props.handleAddEntry} className="addEntry">
					<div className="addEntry__line">
						<Select
							name="activationLevel"
							placeholder="Activation level"
							value={activation}
							onChange={this.handleActivationChange}
							options={setOptions('high normal low')}
						/>
						<Select
							name="AffectType"
							placeholder="Kind of affect"
							value={affect}
							onChange={this.handleAffectChange}
							options={
								activation &&
								(activation.value === 'normal'
									? setOptions('positive negative')
									: setOptions('positive neutral negative'))
							}
						/>
						<Select
							name="emotion"
							placeholder="Feeling right now"
							value={emotion}
							onChange={this.handleEmotionChange}
							options={
								activation &&
								affect &&
								this.setEmotionOptions(activation.value, affect.value)
							}
						/>
					</div>
					<div className="addEntry__line">
						<input
							name="trigger"
							type="text"
							className="addEntry__input"
							placeholder="What did trigger that feeling?"
							autoComplete="off"
						/>
					</div>
					<div className="addEntry__line">
						<input
							type="submit"
							className={
								activation && affect && emotion
									? 'button addEntry__button'
									: 'button addEntry__button button--disabled'
							}
							disabled={activation && affect && emotion ? false : true}
							value="Add Entry"
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default AddEntry;
