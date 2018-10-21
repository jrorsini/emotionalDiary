import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};

		this.onClickHandler = this.onClickHandler.bind(this);
	}

	onClickHandler() {
		this.setState(({ count }) => ({
			count: count + 1
		}));
	}

	render() {
		return (
			<div>
				<button onClick={this.onClickHandler}>count up</button>
				<p>Hello World!</p>
				<b>count: {this.state.count}</b>
			</div>
		);
	}
}

export default hot(module)(App);
