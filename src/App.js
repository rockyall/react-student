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
import Unitec2 from "./components/Unitec2/Unitec2";
import Software from "./components/Software/Software";
import Home from "./components/Home/Home";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/home">
            <main>
              <Home></Home>
            </main>
          </Route>
          <Route exact path="/unitec">
            <div className="container-fluid">
              <Unitec></Unitec>
            </div>
          </Route>
          <Route exact path="/unitec2">
            <div className="container-fluid">
              <Unitec2></Unitec2>
            </div>
          </Route>
          <Route exact path="/history">
            <div className="container-fluid">
              <History></History>
            </div>
          </Route>
          <Route exact path="/software">
            <div className="container-fluid pt-5">
              <Software></Software>
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
