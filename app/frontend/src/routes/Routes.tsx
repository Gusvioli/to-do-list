import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';
import Context from '../context/Context';

function Routes() {
  const {types} = useContext(Context);
  return(
    <Switch>
      <Route path="/home" component={ Home } />
      <Route path="/cadastro" component={ Cadastro } />
      <Route path="/login" component={ Login } />

      { types.map((type: any, index: number) =>
        <Route key={index} path={`${type.url}`} component={
          type.url.replace("/", "")[0].toUpperCase() + type.url.replace("/", "").slice(1)
        } />
      )}

      <Route exact path="/"><Redirect to="/home" /></Route>
    </Switch>
  );
}

export default Routes;

