import React, { Component } from "react";
import {
  Header,
  Container,
  Grid,
  Item,
  Icon,
  Button,
  Label,
  Image,
  Card,
  Dropdown,
  Menu
} from "semantic-ui-react";
import { stateOptions } from "../../common";

class ProfilePage extends Component {
  render() {
    const items = [
      {
        header: "Project Report - April",
        description:
          "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
        meta: "ROI: 30%"
      },
      {
        header: "Project Report - May",
        description:
          "Bring to the table win-win survival strategies to ensure proactive domination.",
        meta: "ROI: 34%"
      },
      {
        header: "Project Report - June",
        description:
          "Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.",
        meta: "ROI: 27%"
      }
    ];
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
                <Header as="h2">
                  <Header.Content>
                    Altuğ Buğra Çelenk
                    <Header.Subheader>
                      <Icon name="location arrow" />
                      Süleyman Demirel Üniversitesi
                    </Header.Subheader>
                    <Header.Subheader>
                      <Icon name="history" />
                      2.Sınıf
                    </Header.Subheader>
                    <Header.Subheader>
                      <Icon name="user" />
                      Bilgisayar Mühendisliği
                    </Header.Subheader>
                  </Header.Content>
                </Header>
                <Button
                  color="green"
                  content="Follow"
                  icon="plus"
                  size="large"
                  fluid
                >
                  <Button.Content>
                    <Icon name="thumbs up" />
                    Rate Profile
                  </Button.Content>
                </Button>
                <br />
                <Button negative size="small" fluid>
                  Block or report this user
                </Button>
              </Grid.Column>
              <Grid.Column width={1} />
            </Grid>
          </Grid.Column>
          <Grid.Column width={10}>
            <Menu>
              <Menu.Item>Search by Course Name</Menu.Item>
              <Dropdown
                placeholder="Course Names"
                fluid
                multiple
                search
                selection
                options={stateOptions}
              />
            </Menu>
            <Card.Group items={items} itemsPerRow="1"/>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default ProfilePage;
