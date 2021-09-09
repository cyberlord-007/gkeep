export const createNote = (note) => {
	return async (dispatch, getState, { getFirebase, getFirestore }) => {
		const fs = getFirestore();
		try {
			await fs.collection("notes").add({ ...note, createdAt: new Date() });
			dispatch({ type: "CREATE_NOTE", note });
		} catch (err) {
			console.log(err);
		}
	};
};
