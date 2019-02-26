import axios from "axios";
import setAuthToken from "utils/setAuthToken";
import { SET_CURRENT_USER , LOGOUT_USER} from "./types";

export function login(data) {
  return dispatch => {
    return axios
      .post("http://localhost:3003/api/users/login", data)
      .then(res => {
        const token = res.data.token;
        localStorage.setItem("jwtToken", token);
        setAuthToken(token);
      });
  };
}

export function setCurrentUser(token) {
  return {
    type: SET_CURRENT_USER,
    token
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(logoutUser());
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER
  }
}
