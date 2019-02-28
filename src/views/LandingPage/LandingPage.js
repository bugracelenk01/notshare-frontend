import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

//importing components
import Parallax from "components/Parallax";
import { GridItem, GridContainer } from "components/Grid";
import Button from "components/Button";
import landingPageStyle from "assets/jss/views/landingPage";

export class LandingPage extends Component {
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
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />
                  Signup Now
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
