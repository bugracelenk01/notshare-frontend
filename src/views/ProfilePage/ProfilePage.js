import React, { Component } from "react";
import {
  Header,
  Container,
  Grid,
  Form,
  Icon,
  Button,
  Comment,
  Image,
  Card,
  Dropdown,
  Menu,
  Tab
} from "semantic-ui-react";
import { stateOptions } from "../../common";
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
    header: "Project Report - May",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination.",
    meta: "ROI: 34%"
  },
  {
    header: "Project Report - May",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination.",
    meta: "ROI: 34%"
  },
  {
    header: "Project Report - May",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination.",
    meta: "ROI: 34%"
  },
  {
    header: "Project Report - May",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination.",
    meta: "ROI: 34%"
  },
  {
    header: "Project Report - May",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination.",
    meta: "ROI: 34%"
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
const panes = [
  {
    menuItem: "Notes",
    render: () => (
      <Tab.Pane attached={false}>
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
        <Card.Group items={items} itemsPerRow="1" />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Comments",
    render: () => (
      <Tab.Pane attached={false}>
        <Comment.Group>
          <Header as="h3" dividing>
            Comments
          </Header>

          <Comment>
            <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
            <Comment.Content>
              <Comment.Author as="a">Matt</Comment.Author>
              <Comment.Metadata>
                <div>Today at 5:42PM</div>
              </Comment.Metadata>
              <Comment.Text>How artistic!</Comment.Text>
              
            </Comment.Content>
          </Comment>

          <Comment>
            <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
            <Comment.Content>
              <Comment.Author as="a">Elliot Fu</Comment.Author>
              <Comment.Metadata>
                <div>Yesterday at 12:30AM</div>
              </Comment.Metadata>
              <Comment.Text>
                <p>
                  This has been very useful for my research. Thanks as well!
                </p>
              </Comment.Text>
              
            </Comment.Content>
            
          </Comment>

          <Comment>
            <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
            <Comment.Content>
              <Comment.Author as="a">Joe Henderson</Comment.Author>
              <Comment.Metadata>
                <div>5 days ago</div>
              </Comment.Metadata>
              <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
              
            </Comment.Content>
          </Comment>

          <Form reply>
            <Form.TextArea />
            <Button
              content="Add Reply"
              labelPosition="left"
              icon="edit"
              primary
            />
          </Form>
        </Comment.Group>
      </Tab.Pane>
    )
  }
];

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
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default ProfilePage;
