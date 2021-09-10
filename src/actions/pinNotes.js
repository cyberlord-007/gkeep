import { PIN_NOTES } from "./actionTypes";

export const pinNotes = (note) => {
	return async (dispatch, getState, { getFirebase, getFirestore }) => {
		const fs = getFirestore();
		try {
			await fs.collection("pinned").add({ ...note, pinnedAt: new Date() });
			dispatch({ type: PIN_NOTES, note });
		} catch (err) {
			console.log(err);
		}
	};
};
