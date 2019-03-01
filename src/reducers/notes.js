import { GET_NOTES, GET_NOTE, PUBLISH_NOTE, DELETE_NOTE } from "actions/types";

const initialState = {
  note: {},
  notes: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTE:
      return { ...state, note: action.payload };
    case GET_NOTES:
      return { ...state, notes: action.payload };
    default:
      return state;
  }
};
