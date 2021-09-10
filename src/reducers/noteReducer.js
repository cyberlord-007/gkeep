import { CREATE_NOTE } from "../actions/actionTypes";

const initState = {};

const noteReducer = (state = initState, action) => {
	switch (action.type) {
		case CREATE_NOTE:
			console.log("created", action.note);
			return state;
		default:
			return state;
	}
};

export default noteReducer;
