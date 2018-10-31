import React from 'react';
import KnowYourEmotions from './KnowYourEmotions';
import Exercice1 from './exercice1';
import Exercice5 from './exercice5';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { hot } from 'react-hot-loader';

const Index = () => <div>Emotional intelligence practice guide</div>;

export default hot(module)(() => (
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
					<li>
						<Link to="/exercice5/">Exercice 5</Link>
					</li>
				</ul>
			</nav>

			<Route path="/" exact component={Index} />
			<Route path="/know_your_emotions/" component={KnowYourEmotions} />
			<Route path="/exercice1/" component={Exercice1} />
			<Route path="/exercice5/" component={Exercice5} />
		</div>
	</Router>
));
