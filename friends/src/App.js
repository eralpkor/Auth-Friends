import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./components/Login";

import "./App.css";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Secret Page</Link>
          </li>
        </ul>
        <div className='form-container'>
          <Switch>
            <PrivateRoute exact path="/protected">
              <Route path="/login" component={Login} />
              <Route component={Login} />
            </PrivateRoute>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
