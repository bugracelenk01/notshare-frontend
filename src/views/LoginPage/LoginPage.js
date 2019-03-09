import React, { Component } from "react";
import { connect } from "react-redux";
import { login, logout } from "actions/authActions";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

class LoginForm extends Component {
  state = { email: "", password: "" };
  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  render() {
    const { login } = this.props;
    return (
      <div className="login-form">
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
        background : rgba(0,0,0,0.01);
      }
    `}</style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              <Image src="/logo.png" /> Log-in to your account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  onChange={this.handleChange}
                  name="email"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  onChange={this.handleChange}
                  name="password"
                />

                <Button
                  color="teal"
                  fluid
                  size="large"
                  onClick={() => login({ email: this.state.email, password: this.state.password})}
                >
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a href="#">Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default connect(
  null,
  { login, logout }
)(LoginForm);
