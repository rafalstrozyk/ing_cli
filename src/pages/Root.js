import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import LoginWaiter from './LoginWaiter';
import Course from './Course';
import PrivateRoute from '../Router/PrivateRoute';
import LeftNav from '../components/LeftNav';

const Root = () => (
  <Switch>
    <Route path='/login'>
      <Login />
    </Route>
    <Route path='/login_waiter'>
      <LoginWaiter />
    </Route>
    <div className='grid grid-site-nav'>
      <LeftNav />
      <PrivateRoute exact path='/' component={Home}></PrivateRoute>
      <PrivateRoute
        path='/courses/:course_id'
        component={Course}
      ></PrivateRoute>
    </div>
  </Switch>
);

export default Root;
