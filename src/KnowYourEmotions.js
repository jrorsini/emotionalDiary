import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Form from './KnowYourEmotions/Form';
import List from './KnowYourEmotions/List';
import './HumanBodyStyle.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchUser, updateEmotions } from './store/actions/user';

class KnowYourEmotions extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		axios
			.get('/emotions/')
			.then(({ data }) => this.props.dispatch(fetchUser(data)));
	}

	removeHandler(date, source) {
		if (this.props.user !== null) {
			const emotions = this.props.user.emotions.filter(
				e => e.source + '' + e.date !== source + '' + date
			);
			this.props.dispatch(updateEmotions(emotions));
			axios.post('/update_emotions/', emotions);
		}
	}

	editHandler(date) {}

	render() {
		return (
			<div>
				<p>know your emotions</p>
				<Form />
				<List />
			</div>
		);
	}
}

const mapStateToProps = state => state;

export default hot(module)(connect(mapStateToProps)(KnowYourEmotions));
