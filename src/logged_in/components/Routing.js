import React, { memo } from "react";
import { Switch } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import Dashboard from "./dashboard/Dashboard";
import PropsRoute from "../../shared/components/PropsRoute";

const styles = theme => ({
  wrapper: {
    margin: theme.spacing(1),
    width: "auto",
    [theme.breakpoints.up("md")]: {
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
});

function Routing(props) {
  const {
    classes
  } = props;
  return (
    <div className={classes.wrapper}>
      <Switch>
        <PropsRoute
          path=""
          component={Dashboard}
        />
      </Switch>
    </div>
  );
}

Routing.propTypes = {

};

export default withStyles(styles, { withTheme: true })(memo(Routing));
