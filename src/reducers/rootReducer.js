import noteReducer from "./noteReducer";
import archiveReducer from "./archiveReducer";
import deleteReducer from "./deleteReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
	note: noteReducer,
	archive: archiveReducer,
	delete: deleteReducer,
	firestore: firestoreReducer,
});

export default rootReducer;
