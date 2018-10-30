export default (state = null, { type, load }) => {
	switch (type) {
		case 'UPDATE_EMOTIONS':
			return state;
		case 'FETCH_USER':
			return { ...state, emotions: load };
		default:
			return state;
	}
};
