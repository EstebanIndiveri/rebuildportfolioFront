import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutScreen from "../pages/AboutScreen";
import HomeScreen from "../pages/HomeScreen";

const AppRouter = () => {

    return (
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
            <hr />
    
            <Switch>
              <Route exact path="/" component={HomeScreen}>
              </Route>
              <Route path="/about" component={AboutScreen}>
              </Route>
              <Route path="/dashboard">
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }
 
export default AppRouter;