import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';
import ListCalendar from '../components/calendar/ListCalendar';
import ListSimple from '../components/simple/ListSimple';
import ForgotPassword from '../components/forgot/forgotPassword';

function Routes() {
  return(
    <Switch>
      <Route path="/home" component={ Home } />
      <Route path="/cadastro" component={ Cadastro } />
      <Route path="/login" component={ Login } />
      <Route path="/home/simple" component={ ListSimple } />
      <Route path="/home/calendar" component={ ListCalendar } />
      <Route path="/forgot" component={ ForgotPassword } />
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
}

export default Routes;
