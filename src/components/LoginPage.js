import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "actions/authActions";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <button onClick = { () => this.props.logout()}>Logout</button>
      </div>
    );
  }
}

export default connect(
  null,
  { logout }
)(LoginPage);
