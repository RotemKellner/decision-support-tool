import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core";
import Routing from "./Routing";
import NavBar from "./navigation/NavBar";

const styles = theme => ({
  main: {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  }
});


class Main extends PureComponent {
  state = {
    CardChart: null,
    EmojiTextArea: null,
    ImageCropper: null,
    Dropzone: null,
    DateTimePicker: null,
    transactions: [],
    statistics: { views: [], profit: [] },
    posts: [],
    targets: [],
    messages: [],
    isAccountActivated: false,
    addBalanceDialogOpen: false
  };

  componentDidMount() {

  }


  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <NavBar/>
        <main className={classNames(classes.main)}>
          <Routing/>
        </main>
      </Fragment>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Main);
