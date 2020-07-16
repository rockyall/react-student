import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class NavBarCustomed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.style = { margin: 0, color: "white" };
  }
  render() {
    return (
      <React.Fragment>
        <nav
          id="Main-navbar"
          className="navbar fixed-top navbar-expand-lg navbar-dark p-3 NavHover"
          style={{ backgroundColor: "#0d0d0d" }}
        >
          <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  target="_blank"
                  href="https://www.github.com/rickywrong"
                >
                  GitHub
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" style={{ color: "#16ff4b" }} href="#">
                  My spotify playlist
                </a>
              </li>
            </ul>
          </div>

          <div class="mx-auto order-0">
            <Link
              to="/"
              className="nav-link C-BrandIcon navbar-brand mx-auto p-0"
              style={this.style}
            >
              Ricardo'<span style={{ color: "#f15a02" }}>s</span> Platform
              <ion-icon name="logo-npm"></ion-icon>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target=".dual-collapse2"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/home" className="nav-link">
                  Works
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/home" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/home" className="nav-link">
                  Contact me
                </Link>
              </li>
              <Link to="/unitec" className="nav-link">
                Unitec
              </Link>
              {/* <li className="nav-item">
                 
                </li>
                <li className="nav-item">
                  <Link to="/history" className="nav-link">
                    Class History
                  </Link>
                </li> */}
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
