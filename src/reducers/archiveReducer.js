import { ARCHIVE_NOTE } from "../actions/actionTypes";

const initState = {};

const archiveReducer = (state = initState, action) => {
	switch (action.type) {
		case ARCHIVE_NOTE:
			return state;
		default:
			return state;
	}
};

export default archiveReducer;
