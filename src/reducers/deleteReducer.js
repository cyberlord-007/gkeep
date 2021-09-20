import { DELETE_NOTE } from "../actions/actionTypes";

const initState = {};

const deleteReducer = (state = initState, action) => {
	switch (action.type) {
		case DELETE_NOTE:
			return state;
		default:
			return state;
	}
};

export default deleteReducer;
