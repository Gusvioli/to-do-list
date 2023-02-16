import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';

function Routes() {
  return(
    <Switch>
      <Route path="/home" component={ Home } />
      <Route path="/cadastro" component={ Cadastro } />
      <Route exact path="/"><Redirect to="/home" /></Route>
    </Switch>
  );
}

export default Routes;

