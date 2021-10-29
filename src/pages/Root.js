import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import LoginWaiter from './LoginWaiter';
import Course from './Course';
import PrivateRoute from '../Router/PrivateRoute';

const Root = () => (
  <Switch>
    <PrivateRoute exact path='/' component={Home}></PrivateRoute>
    <Route path='/login'>
      <Login />
    </Route>
    <Route path='/login_waiter'>
      <LoginWaiter />
    </Route>
    <PrivateRoute path='/courses/:course_id' component={Course}></PrivateRoute>
  </Switch>
);

export default Root;
