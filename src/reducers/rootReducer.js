import noteReducer from "./noteReducer";
import archiveReducer from "./archiveReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
	note: noteReducer,
	archive: archiveReducer,
	firestore: firestoreReducer,
});

export default rootReducer;
