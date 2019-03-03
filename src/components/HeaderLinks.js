/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { login } from "actions/authActions";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload, AccountBoxOutlined } from "@material-ui/icons";

// core components
import Button from "./Button";

import headerLinksStyle from "../assets/jss/components/headerLinkStyle";

function HeaderLinks({ ...props }) {
  const { classes, login } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <AccountBoxOutlined className={classes.icons} /> Sign Up
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          onClick= {() => login({ email: "bugracelenk001@gmail.com", password: "1234qwerasdf"})}
          target="_blank"
          className={classes.navLink}
        >
          <AccountBoxOutlined className={classes.icons} /> Login
        </Button>
      </ListItem>
    </List>
  );
}

const HeaderLinksWStyle = withStyles(headerLinksStyle)(HeaderLinks)

export default connect(null, { login })(HeaderLinksWStyle);
