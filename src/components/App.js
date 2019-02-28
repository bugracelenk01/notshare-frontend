import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "actions/authActions";
import { Button } from "reactstrap";

class App extends Component {
  render() {
    const data = { email: "bugracelenk@gmail.com", password: "1234qwerasdf" };
    return (
      <div>
        <Button color="primary" onClick={() => this.props.login(data)}>Login</Button>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(App);
