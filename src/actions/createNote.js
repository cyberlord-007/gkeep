import { CREATE_NOTE } from "./actionTypes";
import { v4 as uuidv4 } from "uuid";

export const createNote = (note) => {
	return async (dispatch, getState, { getFirebase, getFirestore }) => {
		const fs = getFirestore();
		try {
			await fs.collection("notes").add({
				...note,
				createdAt: new Date(),
				id: uuidv4(),
				pinned: false,
				archived: false,
			});
			dispatch({ type: CREATE_NOTE, note });
		} catch (err) {
			console.log(err);
		}
	};
};
