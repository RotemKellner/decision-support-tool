import { Auth } from "aws-amplify";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import theme from '../../../theme';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.common.white,
  },
  leftSide: {
    flexGrow: 1
  },
  userName: {
    textAlign: 'end'
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [username, setUserName] = React.useState("Dr. Liat Ezra");
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar} variant={'outlined'}>
        <Toolbar>
            <ListItem alignItems="center" className={classes.leftSide}>
              <Box color="text.primary" fontWeight={900} fontSize={24} mr={2}>HOSP</Box>
              <Divider orientation="vertical" flexItem></Divider>
              <Box color={theme.palette.secondary.main} fontSize={18} ml={2}>Decision Support Tool</Box>
            </ListItem>
          <ListItem>
            <ListItemText className={classes.userName} primary={<Typography color="textPrimary">{username}</Typography>}/>
            <IconButton
              onClick={handleMenu}
              color="primary">
              <ArrowDropDownIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}>
              <MenuItem onClick={handleClose}>About</MenuItem>
              <MenuItem onClick={handleSignOut}>Logout</MenuItem>
            </Menu>
          </ListItem>
        </Toolbar>
      </AppBar>
    </div>
  );
}
