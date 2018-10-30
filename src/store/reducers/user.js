export default (state = null, { type, load }) => {
	switch (type) {
		case 'UPDATE_EMOTIONS':
			return { ...state, emotions: load };
		case 'FETCH_USER':
			return state;
		default:
			return state;
	}
};
