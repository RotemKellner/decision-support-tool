import React, { Fragment} from "react";
import { Auth } from "aws-amplify";

import classNames from "classnames";
import {
  AppBar,
  Toolbar,
  Typography,
  ListItem,
  ListItemText,
  Box,
  withStyles,
  isWidthUp,
  withWidth
} from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import theme from '../../../theme';

const styles = theme => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginLeft: 0
    }
  },
  appBarToolbar: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    }
  },
  drawerPaper: {
    height: "100%vh",
    whiteSpace: "nowrap",
    border: 0,
    width: theme.spacing(7),
    overflowX: "hidden",
    marginTop: theme.spacing(8),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    },
    backgroundColor: theme.palette.common.black
  },
  smBordered: {
    [theme.breakpoints.down("xs")]: {
      borderRadius: "50% !important"
    }
  },
  menuLink: {
    textDecoration: "none",
    color: theme.palette.text.primary
  },
  iconListItem: {
    width: "auto",
    borderRadius: theme.shape.borderRadius,
    paddingTop: 11,
    paddingBottom: 11,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  textPrimary: {
    color: theme.palette.primary.main
  },
  mobileItemSelected: {
    backgroundColor: `${theme.palette.primary.main} !important`
  },
  username: {
    paddingLeft: 0,
    paddingRight: theme.spacing(2)
  },
  justifyCenter: {
    justifyContent: "center"
  },
  permanentDrawerListItem: {
    justifyContent: "center",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  signout: {
    minWidth: "auto",
  }
});

function NavBar(props) {
  const { classes, width } = props;

  const [username, setUserName] = React.useState("Dr. Liat Ezra");

  const handleSignOut = () => {
    Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));
  };

  Auth.currentAuthenticatedUser()
    .then(user => {
      setUserName(user.username)
    })
    .catch(err => console.error(err));


  return (
    <Fragment>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar className={classes.appBarToolbar}>
          <ListItem display="flex" alignItems="center">
            <Box color="text.primary" fontWeight={900} fontSize={24} mr={2}>HOSP</Box>
            <Divider orientation="vertical" flexItem></Divider>
            <Box color={theme.palette.secondary.main} fontSize={18} ml={2}>Decision Support Tool</Box>
          </ListItem>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            width="100%"
          >
            <ListItem
              disableGutters
              className={classNames(classes.iconListItem, classes.smBordered)}
            >
              {isWidthUp("sm", width) && (
                <ListItemText
                  className={classes.username}
                  primary={
                  <Typography color="textPrimary">{username}</Typography>
                  }
                />
              )}
              {/* {accountOpen ? <ExpandLess /> : <ExpandMore />} */}
            </ListItem>
            <ListItem button onClick={handleSignOut} className={classNames(classes.iconListItem)}>
              <ListItemIcon className={classNames(classes.signout)}>
                <ExitToAppIcon />
              </ListItemIcon>
            </ListItem>
          </Box>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

export default withWidth()(withStyles(styles, { withTheme: true })(NavBar));
