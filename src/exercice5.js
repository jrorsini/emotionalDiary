import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class Exercice5 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				Select one or 2 feelings
				<h3>1. Take some time to get familiar with all these emotions.</h3>
				<h3>
					2. Sit comfortably, close your eyes and bring this feeling back.
				</h3>
				<h3>
					3. Describe this feeling. The best way to do this is say it aloud.
				</h3>
				<p>Different ways to do that:</p>
				<ul>
					<li>Using a metaphor, e.g. "The fear I feel is like a ...";</li>
					<li>Telling a simple story about this feeling;</li>
					<li>
						Describing mental and phisical sensations connected with that state
						of mind.
					</li>
				</ul>
				<h3>
					4. Examine how you feel after describing this emotion. Did the deeper
					understanding change the way you feel the emotion?
				</h3>
			</div>
		);
	}
}
export default hot(module)(Exercice5);
