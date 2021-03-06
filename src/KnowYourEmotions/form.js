import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchUser, updateEmotions } from '../store/actions/user';

const Form = styled.form`
	width: 46%;
	float: left;
	padding: 2%;
`;

const TextArea = styled.textarea`
	width: 100%;
`;

const SubmitBtn = styled.input`
	margin: auto;
	display: block;
`;

const Label = styled.label`
	width: 100%;
	display: inline-block;
	margin-top: 15px;
	margin-bottom: 5px;
`;

class FormComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate: moment()
		};
		this.handleChange = this.handleChange.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
	}

	submitHandler(e) {
		e.preventDefault();
		const { emotions } = this.props.user;
		let alreadyThere = false;
		const emotion = {
			source: null,
			date: null,
			location: null,
			kind: null,
			intensity: null
		};
		for (let i = 0; i < 5; i++) {
			const input = e.target.elements[i];
			emotion[input.name] = input.value;
			input.value = '';
		}

		emotions.map(e => {
			if (e.source + '' + e.date === emotion.source + '' + emotion.date) {
				alreadyThere = true;
			}
		});
		if (!alreadyThere) {
			this.props.dispatch(updateEmotions(emotions.concat([emotion])));
			axios.post('/update_emotions/', emotions.concat([emotion]));
		}
	}

	handleChange(date) {
		this.setState({ startDate: date });
	}

	render() {
		return (
			<Form onSubmit={this.submitHandler}>
				<Label>
					Where did it come from? What's going on in your head in the moment
					before the emotion appears? What thought triggers this feeling?
				</Label>
				<br />
				<TextArea name="source" />
				<br />
				<Label>When did they start?</Label>
				<DatePicker
					selected={this.state.startDate}
					onChange={this.handleChange}
					showTimeSelect
					timeFormat="HH:mm"
					timeIntervals={15}
					dateFormat="LLL"
					timeCaption="time"
					name="date"
				/>
				<Label>
					Where did they start? Every emotions has its place in your body
				</Label>
				<br />
				<TextArea name="location" />
				<br />
				<Label>What is the course of these emotions</Label>
				<br />
				<TextArea name="kind" />
				<br />
				<Label>What is the Intensity of these emotions</Label>
				<br />
				<TextArea name="intensity" />
				<br />
				<SubmitBtn
					type="submit"
					value="Log emotion"
					onSubmit={this.submitHandler}
				/>
			</Form>
		);
	}
}

const mapStateToProps = state => state;

export default hot(module)(connect(mapStateToProps)(FormComponent));
