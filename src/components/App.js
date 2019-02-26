import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "actions/authActions";

class App extends Component {
  render() {
    const data = { email: "bugracelenk@gmail.com", password: "1234qwerasdf" };
    return (
      <div>
        <button onClick = {() => this.props.login(data)}>Login</button>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(App);
