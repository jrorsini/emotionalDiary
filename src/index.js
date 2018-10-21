import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('root')
	);
};

render(App);

// webpack Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./App', () => {
		// if you are using harmony modules ({modules:false})
		render(App);
		// in all other cases - re-require App manually
		render(require('./App'));
	});
}
