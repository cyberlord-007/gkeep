import { GET_NOTES } from "./actionTypes";

export const getNotes = () => {
	return async (dispatch, { getFirebase, getFirestore }) => {
		const fs = getFirestore();
		await fs.co;
	};
};
