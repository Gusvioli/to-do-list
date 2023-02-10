import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../pages/Home';

function Routes() {
  return(
    <Switch>
      <Route path="/home" component={ Home } />
      <Route exact path="/"><Redirect to="/home" /></Route>
    </Switch>
  );
}

export default Routes;

