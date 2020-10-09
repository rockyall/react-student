import React from "react";
import "./App.css";

import { Switch, Route, Redirect, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import History from "./components/History/History";
import Unitec2 from "./components/Unitec2/Unitec2";
import Software from "./components/Software/Software";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import WebPage from "./components/WebPage";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={WebPage} />
        {/* <Route path="/nested" component={Login}></Route> */}
      </Switch>
    </React.Fragment>
  );
}

export default App;
