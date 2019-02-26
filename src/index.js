import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "reducers";

import App from "components/App";
import LoginPage from "components/LoginPage";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import setAuthToken from "utils/setAuthToken";
import { setCurrentUser } from "actions/authActions";

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
        <Route exact path="/" component={App} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
