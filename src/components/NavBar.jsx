import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class NavBarCustomed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.style = { margin: 0, color: "white" };
    this.styleText = { color: "white", fontSize: 16, textDecoration: "none" };
    this.NavTextRight = {
      color: "black",
      fontSize: 12,
      textDecoration: "none",
    };
  }
  render() {
    return (
      <React.Fragment>
        <nav
          id="Main-navbar"
          className="navbar fixed-top navbar-expand-md navbar-light bg-white navhover shadow"
          style={{ backgroundColor: "#0d0d0d" }}
        >
          <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link nav-link-grow-up"
                  style={{
                    fontSize: 19,
                    color: "black",
                    textDecoration: "none",
                  }}
                  // target="_blank"
                  href="/home"
                >
                  Portafolio
                  {/* <span style={{ marginRight: 12 }}>Ricardo</span>
                  <span id="square"> </span>
                  <span style={{ marginLeft: 12 }}>All</span> */}
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-auto order-0 text-center">
            <Link
              to="/"
              className="nav-link  C-BrandIcon navbar-brand mx-auto"
              style={this.styleText}
            >
              {/* <img
                id="logo"
                className="Sub-header-img"
                src={require("../images/BeeingCreative3.png")}
              ></img> */}
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
              <Link
                to="/home"
                className="nav-link nav-link-grow-up"
                style={this.NavTextRight}
              >
                Home
              </Link>
              <Link
                to="/software"
                className="nav-link nav-link-grow-up"
                style={this.NavTextRight}
              >
                Software
              </Link>
              <Link
                to="/unitec2"
                className="nav-link nav-link-grow-up"
                style={this.NavTextRight}
              >
                Unitec
              </Link>
              <a
                className="nav-link nav-link-grow-up"
                style={this.NavTextRight}
                target="_blank"
                href="https://www.github.com/rickywrong"
              >
                {/* GitHub */}
                <ion-icon name="logo-github"></ion-icon>
                {/* <span style={{ marginRight: 12 }}>Ricardo</span>
                  <span id="square"> </span>
                  <span style={{ marginLeft: 12 }}>All</span> */}
              </a>
              <a
                className="nav-link nav-link-grow-up "
                style={{
                  color: "black",
                  fontSize: 10,
                  textDecoration: "none",
                }}
                target="_blank"
                href="https://dev.to/rickywrong"
              >
                {/* GitHub */}
                <i class="fab fa-dev fa-2x"></i>
              </a>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
