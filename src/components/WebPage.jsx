import React, { Component } from "react";

import { Switch, Route, Redirect, Routes } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import History from "./History/History";
import Unitec2 from "./Unitec2/Unitec2";
import Software from "./Software/Software";
import Home from "./Home/Home";

const WebPage = () => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Switch>
        <Route
          exact
          path="/home"
          render={(props) => <Home {...props}></Home>}
        ></Route>
        <Route
          exact
          path="/unitec2"
          render={(props) => <Unitec2 {...props}></Unitec2>}
        ></Route>

        <Route
          exact
          path="/history"
          render={(props) => <History {...props}></History>}
        ></Route>
        <Route
          exact
          path="/software"
          render={(props) => <Software {...props}></Software>}
        ></Route>
        <Redirect to="/home"></Redirect>
      </Switch>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default WebPage;
