import React from 'react';
import KnowYourEmotions from './KnowYourEmotions';
import Exercice1 from './exercice1';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Index = () => <div>Emotional intelligence practice guide</div>;

export default () => (
	<Router>
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/know_your_emotions/">Know your emotions</Link>
					</li>
					<li>
						<Link to="/exercice1/">Exercice 1</Link>
					</li>
				</ul>
			</nav>

			<Route path="/" exact component={Index} />
			<Route path="/know_your_emotions/" component={KnowYourEmotions} />
			<Route path="/exercice1/" component={Exercice1} />
		</div>
	</Router>
);
