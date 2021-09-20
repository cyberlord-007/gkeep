import { DELETE_NOTE } from "./actionTypes";

export const deleteNotes = ({ noteDoc }) => {
	return async (dispatch, getState, { getFirebase, getFirestore }) => {
		const fs = getFirestore();
		try {
			await fs.delete({ collection: "notes", doc: noteDoc });
			dispatch({ type: DELETE_NOTE });
		} catch (err) {
			console.log(err);
		}
	};
};
