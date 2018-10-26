import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { hot } from 'react-hot-loader';
import 'react-datepicker/dist/react-datepicker.css';

class KnowYourEmotions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate: moment()
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(date) {
		console.log(date);
		this.setState({
			startDate: date
		});
	}
	render() {
		return (
			<div>
				<form action="">
					<label>
						Where did it come from? What's going on in your head in the moment
						before the emotion appears? What thought triggers this feeling?
					</label>
					<br />
					<input type="text" />
					<br />
					<label>
						Where and when did they start? Every emotions has its place in your
						body
					</label>
					<DatePicker
						selected={this.state.startDate}
						onChange={this.handleChange}
						showTimeSelect
						timeIntervals={15}
						dateFormat="LLL"
						timeCaption="time"
					/>
				</form>
			</div>
		);
	}
}

export default hot(module)(KnowYourEmotions);
