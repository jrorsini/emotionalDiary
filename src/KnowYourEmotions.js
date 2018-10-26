import React from 'react';
import { hot } from 'react-hot-loader';

export default hot(module)(() => (
	<div>
		<p>Know your emotions</p>
		<form action="">
			<label>
				Where did it come from? What's going on in your head in the moment
				before the emotion appears? What thought triggers this feeling?
			</label>
			<input type="text" />

			<label>
				Where and when did they start? Every emotions has its place in your body
			</label>
		</form>
	</div>
));
