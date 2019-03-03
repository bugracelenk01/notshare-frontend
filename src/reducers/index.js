import { combineReducers } from "redux";
import notesReducer from "reducers/notes";
import authReducer from "reducers/auth";
import flashMessages from "reducers/flashMessages";

export default combineReducers({
  notes: notesReducer,
  auth: authReducer,
  flashMessages
});
