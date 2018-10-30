import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateEmotions } from '../store/actions/user';

const List = styled.ul`
	display: inline-block;
	width: 46%;
	padding: 2%;
	list-style: none;
`;

class ListComponent extends Component {
	constructor(props) {
		super(props);
	}

	removeHandler(date, source) {
		const emotions = this.props.user.emotions.filter(
			e => e.source + '' + e.date !== source + '' + date
		);
		this.props.dispatch(updateEmotions(emotions));
		axios.post('/update_emotions/', emotions);
	}

	editHandler(date) {}

	render() {
		this.props.user && console.log(this.props.user);
		return (
			<List className="emotionLogList">
				{this.props.user !== null &&
					this.props.user.emotions.emotions.map((e, i) => (
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
					))}
			</List>
		);
	}
}

const mapStateToProps = state => state;

export default hot(module)(connect(mapStateToProps)(ListComponent));
