import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class NavBarCustomed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.style = { margin: 0, color: "white" };
    this.styleText = { color: "white" };
  }
  render() {
    return (
      <React.Fragment>
        <nav
          id="Main-navbar"
          className="navbar fixed-top navbar-expand-md navbar-dark p-3 navhover"
          style={{ backgroundColor: "#0d0d0d" }}
        >
          <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  style={this.styleText}
                  target="_blank"
                  href="https://www.github.com/rickywrong"
                >
                  <i
                    className="fab fa-github fa-lg white-text  mr-1 fa-1.5x"
                    style={{ color: "gray" }}
                  >
                    {" "}
                  </i>
                  GitHub
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" style={{ color: "#16ff4b" }} href="#">
                  <i
                    className="fab fa-spotify fa-lg white-text mr-1 fa-1.5x"
                    style={{ color: "green" }}
                  >
                    {" "}
                  </i>
                  My spotify playlist
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-auto order-0">
            <Link
              to="/"
              className="nav-link  C-BrandIcon navbar-brand mx-auto"
              style={this.styleText}
            >
              {/* Ricardo's Platform */}
              <span style={{ color: "#f15a02" }}></span>
              {/* <ion-icon name="logo-npm"></ion-icon> */}
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
          {/* <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2"></div> */}

          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 navhover">
            <ul className="navbar-nav ml-auto navhover">
              <li className="nav-item active">
                <Link to="/home" className="nav-link" style={this.styleText}>
                  Home
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/home" className="nav-link" style={this.styleText}>
                  Works
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/home" className="nav-link" style={this.styleText}>
                  About
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/home" className="nav-link" style={this.styleText}>
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
