import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import './HumanBodyStyle.css';

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

const List = styled.ul`
	display: inline-block;
	width: 46%;
	padding: 2%;
	list-style: none;
`;

class KnowYourEmotions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate: moment()
		};
		this.handleChange = this.handleChange.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
	}

	componentDidMount() {}

	submitHandler(e) {
		e.preventDefault();
		for (let i = 0; i < 5; i++) {
			const el = e.target.elements[i];
			console.log(el.value);
		}
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
				<p>know your emotions</p>
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
				<List className="emotionLogList">
					<li>emotion1</li>
					<li>emotion2</li>
					<li>emotion3</li>
				</List>
			</div>
		);
	}
}

export default hot(module)(KnowYourEmotions);