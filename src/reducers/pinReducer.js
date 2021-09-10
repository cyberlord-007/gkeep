import { PIN_NOTES, SET_PINNED } from "../actions/actionTypes";

const initState = {};

const pinReducer = (state = initState, action) => {
	switch (action.type) {
		case PIN_NOTES:
			return state;
		default:
			return state;
	}
};

export default pinReducer;
