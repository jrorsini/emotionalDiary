import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import axios from 'axios';
import { fetchUser } from './store/actions/user';

axios.get('/emotions/').then(({ data }) => {
	store.dispatch(fetchUser(data));
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
