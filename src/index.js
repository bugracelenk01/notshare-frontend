import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "reducers";

import App from "components/App";
import LoginPage from "components/LoginPage";
import LandingPage from "views/LandingPage/LandingPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "components/Header";
import HeaderLinks from "components/HeaderLinks";

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

const dashboardRoutes = [];

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="NoteShare"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          //{...rest}
        />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={requireAuth(LoginPage)} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
