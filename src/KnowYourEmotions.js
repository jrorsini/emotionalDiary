import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
// import 'react-select/dist/react-select.css';
import Form from './KnowYourEmotions/Form';
import './HumanBodyStyle.css';
import axios from 'axios';

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
			startDate: moment(),
			emotions: []
		};
	}

	componentDidMount() {
		axios.get('/emotions/').then(({ data }) => {
			this.setState(prevState => ({
				...prevState,
				emotions: data.emotions
			}));
		});
	}

	removeHandler(date, source) {
		this.setState(prevState => {
			const emotions = prevState.emotions.filter(
				e => e.source + '' + e.date !== source + '' + date
			);
			axios.post('/update_emotions/', emotions).then();
			return { ...prevState, emotions };
		});
	}

	editHandler(date) {}

	render() {
		return (
			<div>
				<p>know your emotions</p>
				<Form />
				<List className="emotionLogList">
					{this.state.emotions.map((e, i) => {
						return (
							<li key={i}>
								<b>{e.date}</b> - <br />
								<span>
									trigger: <b>{e.source}</b>
								</span>
								<br />
								<span>
									located in <b>{e.location}</b>, course - <b>{e.kind}</b>
								</span>
								<span>
									Intensity - <b>{e.intensity}</b>
								</span>
								<button onClick={() => this.removeHandler(e.date, e.source)}>
									remove
								</button>
								<button>edit</button>
							</li>
						);
					})}
				</List>
			</div>
		);
	}
}

export default hot(module)(KnowYourEmotions);
