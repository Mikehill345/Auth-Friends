import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute'
import FriendsList from './Components/FriendsList'
import Login from './Components/Login'

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to='/login'>Login</Link>
          <br />
          <Link to='/friendslist'>Protected Page</Link>
        </div>
        <Switch>
          <PrivateRoute exact path='/friendslist' component={FriendsList} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
