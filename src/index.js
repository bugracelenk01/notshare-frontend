import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "reducers";
import "semantic-ui-css/semantic.min.css";
import LandingPage from "views/LandingPage/LandingPage";
import LoginPage from "views/LoginPage/LoginPage";
import ProfilePage from "views/ProfilePage/ProfilePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import setAuthToken from "utils/setAuthToken";
import { setCurrentUser } from "actions/authActions";

import requireAuth from "utils/requireAuth";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(localStorage.jwtToken));
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/profile" component={requireAuth(ProfilePage)} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
