import React, { Component } from 'react';
import Select from 'react-select';
import { hot } from 'react-hot-loader';

const setOptions = optionString =>
	optionString.split(' ').map(option => ({
		value: option,
		label: option.charAt(0).toUpperCase() + option.slice(1)
	}));

class Exercice1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputs: {
				activation: 'Activation level',
				affect: 'Kind of affect',
				emotion: 'Feeling right now'
			},
			activation: '',
			affect: '',
			emotion: '',
			trigger: '',
			entries: [],
			triggers: [],
			errorMessage: null
		};
		this.setEmotionOptions = this.setEmotionOptions.bind(this);
		this.handleActivationChange = this.handleActivationChange.bind(this);
	}

	handleActivationChange(activation) {
		this.setState(prevState => ({
			...prevState,
			activation: activation.value
		}));
	}

	handleAffectChange(affect) {
		this.setState({ affect: affect.value });
	}

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
			<div>
				Select form goes here
				<Select
					placeholder="Activation level"
					onChange={this.handleActivationChange}
					value={activation}
					options={setOptions('high normal low')}
				/>
				{activation && (
					<Select
						placeholder="Kind of affect"
						value={affect}
						options={
							activation === 'normal'
								? setOptions('positive negative')
								: setOptions('positive neutral negative')
						}
					/>
				)}
				{/* <Select
					name="AffectType"
					placeholder="Kind of affect"
					value={affect}
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
					options={
						activation &&
						affect &&
						this.setEmotionOptions(activation.value, affect.value)
					}
				/> */}
			</div>
		);
	}
}
export default hot(module)(Exercice1);
