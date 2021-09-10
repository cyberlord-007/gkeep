import { PIN_NOTES } from "./actionTypes";

export const pinNotes = ({ noteDoc, note }) => {
	return async (dispatch, getState, { getFirebase, getFirestore }) => {
		const fs = getFirestore();
		try {
			await fs.update(
				{ collection: "notes", doc: noteDoc },
				{ ...note, pinned: !note.pinned }
			);
			dispatch({ type: PIN_NOTES, note });
		} catch (err) {
			console.log(err);
		}
	};
};
