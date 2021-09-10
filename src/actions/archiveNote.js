import { ARCHIVE_NOTE } from "./actionTypes";

export const archiveNotes = (note) => {
	return async (dispatch, getState, { getFirebase, getFirestore }) => {
		const fs = getFirestore();
		try {
			await fs.collection("archived").add({ ...note, archivedAt: new Date() });
			await fs.collection("notes").where("id", "==", note.id).delete();
			dispatch({ type: ARCHIVE_NOTE, note });
		} catch (err) {
			console.log(err);
		}
	};
};
