import { EDIT_NOTE } from "./actionTypes";

export const editNote = ({ noteDoc, note, title, body }) => {
	return async (dispatch, getState, { getFirebase, getFirestore }) => {
		const fs = getFirestore();
		try {
			await fs.update(
				{ collection: "notes", doc: noteDoc },
				{ ...note, title, body }
			);
			dispatch({ type: EDIT_NOTE, note });
		} catch (err) {
			console.log(err);
		}
	};
};
