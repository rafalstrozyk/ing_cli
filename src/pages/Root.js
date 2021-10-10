import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import LoginWaiter from './LoginWaiter';
import Course from './Course';

const Root = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/login_waiter">
      <LoginWaiter />
    </Route>
    <Route path="/courses/:course_id">
      <Course />
    </Route>
  </Switch>
);

export default Root;
