import { Fragment } from "react";
import AppRouter from "./routes/AppRouter";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.scss';
function App() {
  return (
    <Fragment>
      <Router>
        <AppRouter/>
      </Router>
    </Fragment>
  );
}

export default App;
