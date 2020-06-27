import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import History from "./components/History/History";
import Unitec from "./components/Unitec/Unitec";
import Home from "./components/Home/Home";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/home">
            <div className="container-fluid">
              <Home></Home>
            </div>
          </Route>
          <Route exact path="/unitec">
            <div className="container-fluid">
              <Unitec></Unitec>
            </div>
          </Route>
          <Route exact path="/history">
            <div className="container-fluid">
              <History></History>
            </div>
          </Route>
          <Redirect to="/home"></Redirect>
        </Switch>
        <Footer></Footer>
      </Router>
    </React.Fragment>
  );
}

export default App;
