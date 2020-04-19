import React, { Fragment, Suspense, lazy } from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Amplify, {API} from 'aws-amplify';
import {Config} from './aws-exports';
import '@aws-amplify/ui/dist/style.css';

import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import * as serviceWorker from "./serviceWorker";
import ReactGA from 'react-ga';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(Config);
API.configure(Config);

const LoggedInComponent = lazy(() => import("./logged_in/components/Main"));

const trackingId = 'UA-163803019-1';
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Suspense fallback={<Fragment />}>
          <Switch>
            <Route path="/">
              <LoggedInComponent />
            </Route>
          </Switch>
        </Suspense>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

serviceWorker.unregister();

export default withAuthenticator(App);
