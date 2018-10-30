export default (state = null, { type, load }) => {
	switch (type) {
		case 'UPDATE_EMOTIONS':
			return { ...state, emotions: load };
		case 'FETCH_USER':
			return load;
		default:
			return state;
	}
};
