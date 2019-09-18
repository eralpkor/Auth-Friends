import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./components/Login";
import Home from './components/Home';

import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends Page</Link>
          </li>
        </ul>
        <div className='form-container'>
          <Switch>
            <Route exact path='/' component={Home} />
          <Route exact path="/login" component={Login} />
            <PrivateRoute path="/friends" component={FriendsList} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
