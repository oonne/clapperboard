import { PRODUCTION, DIRECTOR, CAMERAMAN } from '../actions/attr';

const initialState = {
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case PRODUCTION:
			return {
				...state,
				production: action.production,
			};
		case DIRECTOR:
			return {
				...state,
				director: action.director,
			};
		case CAMERAMAN:
			return {
				...state,
				cameraman: action.cameraman,
			};
		default:
			return state;
	}
}

export default reducer;