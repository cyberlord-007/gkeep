import { ARCHIVE_NOTE } from "./actionTypes";

export const archiveNotes = ({ noteDoc, note }) => {
	return async (dispatch, getState, { getFirebase, getFirestore }) => {
		const fs = getFirestore();
		try {
			await fs.update(
				{ collection: "notes", doc: noteDoc },
				{ ...note, archived: !note.archived }
			);
			dispatch({ type: ARCHIVE_NOTE, note });
		} catch (err) {
			console.log(err);
		}
	};
};
