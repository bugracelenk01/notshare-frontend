import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
import {
  getNoteById,
  publishNote,
  getNotes,
  deleteNote
} from "actions/noteActions";
//importing components
import Parallax from "components/Parallax";
import { GridItem, GridContainer } from "components/Grid";
import Button from "components/Button";
import landingPageStyle from "assets/jss/views/landingPage";

export class LandingPage extends Component {
  renderNotes() {
    return this.props.notes.notes.map(note => {
      return (
        <li key={note.name}>
          {note.name} , {note.courseName}
        </li>
      );
    });
  }

  renderNote() {
    if (this.props.note) {
      return (
        <li>
          <ul>
            <li>{this.props.note.name}</li>
            <li>{this.props.note.courseName}</li>
          </ul>
        </li>
      );
    }
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Parallax filter image={require("assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>All the notes that exists!!</h1>
                <h4>
                  Every landing page needs a small description after the big
                  bold title, that's why we added this text here. Add here all
                  the information that can make you or your product create the
                  first impression.
                </h4>
                <br />
                <Button
                  color="primary"
                  size="lg"
                  onClick={() =>
                    this.props.publishNote({
                      name: "second try from ui",
                      coursename: "course name"
                    })
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />
                  Publish Note
                </Button>
                <Button
                  color="success"
                  size="lg"
                  onClick={() =>
                    this.props.getNoteById("5c79b3d66c493f17c8cd7f04")
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />
                  Get Note
                </Button>
                <Button
                  color="github"
                  size="lg"
                  onClick={() => this.props.getNotes()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />
                  Get Notes
                </Button>
                <Button
                  color="danger"
                  size="lg"
                  onClick={() =>
                    this.props.deleteNote("5c79b3d66c493f17c8cd7f04")
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />
                  Delete Note
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <ul>{this.renderNote()}</ul>
        <ul>{this.renderNotes()}</ul>
      </div>
    );
  }
}

const LandingPageWStyle = withStyles(landingPageStyle)(LandingPage);

function mapStateToProps(state) {
  return { notes: state.notes, note: state.note };
}

export default connect(
  mapStateToProps,
  { getNoteById, publishNote, getNotes, deleteNote }
)(LandingPageWStyle);
