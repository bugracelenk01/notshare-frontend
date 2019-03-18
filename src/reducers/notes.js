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
      action.payload.map(note => {
        state.notes=[...state.notes, { title:note.name, description: note.courseName, price: note.id}]
      })
      return state;
    default:
      return state;
  }
};
