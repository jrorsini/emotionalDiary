import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { hot } from 'react-hot-loader';
import 'react-datepicker/dist/react-datepicker.css';

class KnowYourEmotions extends Component {
	constructor(props) {
		super(props);
	}

	handleChange(date) {
		console.log(date);
	}
	render() {
		return (
			<div>
				test
				<DatePicker
					onChange={this.handleChange}
					showTimeSelect
					timeFormat="HH:mm"
					timeIntervals={15}
					dateFormat="LLL"
					timeCaption="time"
				/>
			</div>
		);
	}
}

export default hot(module)(KnowYourEmotions);
