import { PIN_NOTES } from "../actions/actionTypes";

const initState = {};

const noteReducer = (state = initState, action) => {
	switch (action.type) {
		case PIN_NOTES:
			return state;
		default:
			return state;
	}
};

export default noteReducer;
