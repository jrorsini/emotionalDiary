export default (state = null, { type, load }) => {
	switch (type) {
		case 'UPDATE_EMOTIONS':
			return { ...state, emotions: load };
		case 'UPDATE_IMPORTANT_PEOPLE':
			return { ...state, importantPeople: load };
		case 'FETCH_USER':
			return load;
		default:
			return state;
	}
};
