import { SET_NOTE, SEARCH_QUERY, SET_ALL_NOTES } from "./actionTypes";

export const setNotes = (notes) => {
	return (dispatch, getState) => {
		try {
			dispatch({ type: SET_NOTE, notes });
		} catch (err) {
			console.log(err);
		}
	};
};

export const setAllNotes = (notes) => {
	return (dispatch, getState) => {
		try {
			dispatch({ type: SET_ALL_NOTES, notes });
		} catch (err) {
			console.log(err);
		}
	};
};

export const setQuery = (query) => {
	return (dispatch, getState) => {
		try {
			dispatch({ type: SEARCH_QUERY, query });
		} catch (err) {
			console.log(err);
		}
	};
};

export const searchNotes = (_searchQuery) => {
	return (dispatch, getState) => {
		const state = getState();
		const { allNotes } = state.note;
		if (!_searchQuery) {
			dispatch(setNotes(allNotes));
		}
		if (_searchQuery.trim()) {
			const filteredResults = Object.values(allNotes).filter(
				(note) =>
					note.title?.toLowerCase().includes(_searchQuery?.toLowerCase()) ||
					note.body?.toLowerCase().includes(_searchQuery?.toLowerCase())
			); 
			dispatch(setNotes(filteredResults));
		}
	};
};
