import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import anime from "animejs";

export default class NavBarCustomed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.style = { margin: 0, color: "white" };
    this.styleText = { color: "white", fontSize: 16, textDecoration: "none" };
    this.NavTextRight = {
      color: "white",
      fontSize: 12,
      textDecoration: "none",
    };
  }

  componentDidMount = () => {
    document.getElementById("Main-navbar").style.padding = "30px";
  };

  render() {
    return (
      <React.Fragment>
        <nav
          id="Main-navbar"
          className="navbar fixed-top navbar-expand-md navbar-light navhover shadow-sm"
          style={{ backgroundColor: "black" }}
        >
          <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/home"
                  className="nav-link nav-link-grow-up"
                  style={{
                    fontSize: 19,
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  ricardoall_
                </Link>
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
              className="navbar-toggler"
              style={{ backgroundColor: "white" }}
              type="button"
              data-toggle="collapse"
              data-target=".dual-collapse2"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 navhover">
            <ul className="navbar-nav ml-auto navhover">
              <Link
                to="/software"
                className="nav-link nav-link-grow-up"
                style={this.NavTextRight}
              >
                Software
              </Link>
              <Link
                to="/home"
                className="nav-link nav-link-grow-up"
                style={this.NavTextRight}
              >
                Curriculum
              </Link>
              <Link
                to="/unitec2"
                className="nav-link nav-link-grow-up"
                style={this.NavTextRight}
              >
                Tips stuff
              </Link>

              <a
                className="nav-link nav-link-grow-up"
                style={this.NavTextRight}
                target="_blank"
                href="https://www.github.com/rockyall"
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
                <i className="fab fa-dev fa-2x"></i>
              </a>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
