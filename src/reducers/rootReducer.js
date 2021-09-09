import noteReducer from "./noteReducer";
import archiveReducer from "./archiveReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	note: noteReducer,
	archive: archiveReducer,
});

export default rootReducer;
