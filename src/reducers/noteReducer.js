import { CREATE_NOTE, PIN_NOTES } from "../actions/actionTypes";

const initState = {};

const noteReducer = (state = initState, action) => {
	switch (action.type) {
		case CREATE_NOTE:
			console.log("created", action.note);
			return state;
		case PIN_NOTES:
			return state;
		default:
			return state;
	}
};

export default noteReducer;