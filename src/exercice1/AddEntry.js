import React, { Component } from 'react';
import Select from 'react-select';
import { hot } from 'react-hot-loader';

const setOptions = optionString =>
	optionString.split(' ').map(option => ({
		value: option,
		label: option.charAt(0).toUpperCase() + option.slice(1)
	}));

class AddEntry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activation: null,
			affect: null,
			emotion: null
		};
		this.handleActivationChange = this.handleActivationChange.bind(this);
		this.handleEmotionChange = this.handleEmotionChange.bind(this);
		this.handleAffectChange = this.handleAffectChange.bind(this);
		this.setEmotionOptions = this.setEmotionOptions.bind(this);
	}

	handleActivationChange(activation) {
		this.setState({ activation });
	}

	handleEmotionChange(emotion) {
		this.setState({ emotion });
	}

	handleAffectChange(affect) {
		this.setState({ affect });
	}

	setEmotionOptions(activation, affect) {
		const emSet1 = 'excited surprised active rapt';
		const emSet2 = 'astonished willing agitated';
		const emSet3 = 'enthusiast cheerful excited euphoric animated peppy';
		const emSet4 = 'amused proud sensitive';
		const emSet5 = 'happy delighted glad joyful hearty satisfied';
		const emSet6 = 'nostalgic modest cheerful';
		const emSet7 = 'relaxed happy rested calm cheerful easy';
		const emSet8 = 'shy serious sleepy';
		const emSet9 = 'calm quiet inactive lazy passive';
		const emSet10 = 'dazed bored listless';
		const emSet11 = 'numb tired lethargic heavy distressed';
		const emSet12 = 'ashamed disappointed';
		const emSet13 = 'unhappy depressed sad sour dreary downcast';
		const emSet14 = 'jealous disgusted confused';
		const emSet15 = 'stressed angry frightened upset jittery conserned';
		const emSet16 = 'contradictory alarmed furious';

		const high_positive = emSet2 + ' ' + emSet3 + ' ' + emSet4;
		const high_neutral = emSet16 + ' ' + emSet1 + ' ' + emSet2;
		const high_negative = emSet14 + ' ' + emSet15 + ' ' + emSet16;

		const normal_negative = emSet14 + ' ' + emSet13 + ' ' + emSet12;
		const normal_positive = emSet4 + ' ' + emSet5 + ' ' + emSet6;

		const low_positive = emSet6 + ' ' + emSet7 + ' ' + emSet8;
		const low_neutral = emSet8 + ' ' + emSet9 + ' ' + emSet10;
		const low_negative = emSet10 + ' ' + emSet11 + ' ' + emSet12;

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
						return setOptions(normal_negative);
				}
				break;
			case 'low':
				switch (affect) {
					case 'positive':
						return setOptions(low_positive);
					case 'neutral':
						return setOptions(low_neutral);
					case 'negative':
						return setOptions(low_negative);
				}
				break;
		}
	}

	render() {
		const { activation, affect, emotion } = this.state;

		return (
			<div>
				<Select
					value={activation}
					name="activationLevel"
					placeholder="Activation level"
					onChange={this.handleActivationChange}
					options={setOptions('high normal low')}
				/>
				<br />
				{activation !== null && (
					<Select
						value={affect}
						name="AffectType"
						placeholder="Kind of affect"
						onChange={this.handleAffectChange}
						options={
							activation.value === 'normal'
								? setOptions('positive negative')
								: setOptions('positive neutral negative')
						}
					/>
				)}
				<br />
				{activation !== null &&
					affect !== null && (
						<Select
							value={emotion}
							name="emotion"
							placeholder="Feeling right now"
							onChange={this.handleEmotionChange}
							options={this.setEmotionOptions(activation.value, affect.value)}
						/>
					)}
			</div>
		);
	}
}
export default hot(module)(AddEntry);
