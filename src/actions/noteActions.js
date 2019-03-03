import { GET_NOTES, GET_NOTE, DELETE_NOTE, PUBLISH_NOTE } from "actions/types";
import axios from "axios";

export function getNotes() {
  return dispatch => {
    return axios.get("https://noteshare-backend.herokuapp.com/api/notes/get-notes").then(res => {
      return dispatch({
        type: GET_NOTES,
        payload: res.data
      });
    })
  }
};

export function getNoteById(id) {
  return dispatch => {
    return axios
      .get(`https://noteshare-backend.herokuapp.com/api/notes/get-note/${id}`)
      .then(res => {
        const note = res.data;
        return dispatch({
          type: GET_NOTE,
          payload: note
        })
      })
      .catch(err => console.log(err));
  };
}

export function publishNote(data) {
  return dispatch => {
    axios
      .post("https://noteshare-backend.herokuapp.com/api/notes/publish-note", data)
      .then(res => {
        console.log(res);
      });
  };
}

export function deleteNote(id) {
  return dispatch => {
    return axios.delete(`https://noteshare-backend.herokuapp.com/api/notes/delete-note/${id}`).then(res => {
      console.log(res)
    })
  }
}