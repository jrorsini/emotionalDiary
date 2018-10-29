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
		const emotionSet1 = 'excited surprised active rapt';
		const emotionSet2 = 'astonished willing agitated';
		const emotionSet3 = 'enthusiast cheerful excited euphoric animated peppy';
		const emotionSet4 = 'amused proud sensitive';
		const emotionSet5 = 'happy delighted glad joyful hearty satisfied';
		const emotionSet6 = 'nostalgic modest cheerful';
		const emotionSet7 = 'relaxed happy rested calm cheerful easy';
		const emotionSet8 = 'shy serious sleepy';
		const emotionSet9 = 'calm quiet inactive lazy passive';
		const emotionSet10 = 'dazed bored listless';
		const emotionSet11 = 'numb tired lethargic heavy distressed';
		const emotionSet12 = 'ashamed disappointed';
		const emotionSet13 = 'unhappy depressed sad sour dreary downcast';
		const emotionSet14 = 'jealous disgusted confused';
		const emotionSet15 = 'stressed angry frightened upset jittery conserned';
		const emotionSet16 = 'contradictory alarmed furious';

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
		const { activation, affect, emotion } = this.state;

		return (
			<div>
				<Select
					value={activation}
					placeholder="Activation level"
					onChange={this.handleActivationChange}
					options={setOptions('high normal low')}
				/>
				{activation !== null && (
					<Select
						value={affect}
						placeholder="Kind of affect"
						onChange={this.handleAffectChange}
						options={
							activation.value === 'normal'
								? setOptions('positive negative')
								: setOptions('positive neutral negative')
						}
					/>
				)}
				{activation !== null &&
					affect !== null && (
						<Select
							placeholder="Feeling right now"
							value={emotion}
							onChange={this.handleEmotionChange}
							options={this.setEmotionOptions(activation.value, affect.value)}
						/>
					)}
			</div>
		);
	}
}
export default hot(module)(AddEntry);
