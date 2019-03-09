import React, { Component } from "react";
import {
  Header,
  Container,
  Grid,
  Item,
  Icon,
  Button,
  Label,
  Image
} from "semantic-ui-react";

class ProfilePage extends Component {
  render() {
    return (
      <Container>
        <Grid centered columns={14}>
          <Grid.Column width={4}>
            <Grid centered columns={16}>
              <Grid.Column width={4} />
              <Grid.Column width={14}>
                <Image
                  size="medium"
                  src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
                  circular
                />
                <Header
                  as="h2"
                  content="Account Settings"
                  subheader="Manage your account settings and set email preferences"
                />
                <Button
                  color="green"
                  content="Follow"
                  icon="plus"
                  size="large"
                  fluid
                />
                <br/>
                <Button negative size="small" fluid>
                  Block or report this user
                </Button>
              </Grid.Column>
              <Grid.Column width={1} />
            </Grid>
          </Grid.Column>
          <Grid.Column width={10}>hello world</Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default ProfilePage;
