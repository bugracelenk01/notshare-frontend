import { combineReducers } from "redux";
import notesReducer from "reducers/notes";
import authReducer from "reducers/auth";

export default combineReducers({
  notes: notesReducer,
  auth: authReducer
});
