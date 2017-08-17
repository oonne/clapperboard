import { SCENE, SHOT, TAKE } from '../actions/cinematography';

const initialState = {
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case SCENE:
			return {
				...state,
				scene: Number(action.scene).toString(),
			};
		case SHOT:
			return {
				...state,
				shot: Number(action.shot).toString(),
			};
		case TAKE:
			return {
				...state,
				take: Number(action.take).toString(),
			};
		default:
			return state;
	}
}

export default reducer;