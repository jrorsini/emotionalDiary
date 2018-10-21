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
		this.setState(prevState => {
			console.log(prevState);
		});
	}

	render() {
		return (
			<div>
				<p> Hello World!</p>
				<b>count: {this.state.count}</b>
				<button onClick={this.onClickHandler}>count up</button>
			</div>
		);
	}
}

export default hot(module)(App);
