import {
	CREATE_NOTE,
	SET_NOTE,
	SEARCH_QUERY,
	SET_ALL_NOTES,
} from "../actions/actionTypes";

const initState = { notes: {}, searchQuery: "", allNotes: {} };

const noteReducer = (state = initState, action) => {
	switch (action.type) {
		case CREATE_NOTE:
			console.log("created", action.note);
			return state;
		case SET_NOTE:
			return { ...state, notes: action.notes };
		case SEARCH_QUERY:
			return { ...state, searchQuery: action.query };
		case SET_ALL_NOTES:
			return { ...state, allNotes: action.notes };
		default:
			return state;
	}
};

export default noteReducer;
