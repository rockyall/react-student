import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import anime from "animejs";

export default class NavBarCustomed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.style = { margin: 0, color: "white" };
    this.styleText = { color: "white", textDecoration: "none" };
    this.NavTextRight = {
      color: "white",
      fontSize: 12,
      textDecoration: "none",
    };
  }

  componentDidMount = () => {
    document.getElementById("Main-navbar").style.padding = "8px";
  };

  render() {
    return (
      <React.Fragment>
        <nav
          id="Main-navbar"
          className="navbar fixed-top navbar-light navbar-expand-lg"
        >
          <div className="container">
            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/home"
                    className="nav-link"
                    style={{
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
                <span style={{ color: "#f15a02" }}></span>
              </Link>

              <button
                className="navbar-toggler"
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
                  className="nav-link"
                  style={this.NavTextRight}
                >
                  Software
                </Link>
                <Link
                  to="/summary"
                  className="nav-link"
                  style={this.NavTextRight}
                >
                  Curriculum
                </Link>
                <a
	    href="https://github.com/rockyall"
	    target="_blank"
                  className="fab fa-github fa-lg m-2 fa-1.5x"
                  style={{ color: "gray" }}
                >
                  {" "}
                </a>
                {/* <Link
                to="/unitec2"
                className="nav-link"
                style={this.NavTextRight}
              >
                Tips stuff
              </Link>
              <Link
                to="/finance"
                className="nav-link"
                style={this.NavTextRight}
              >
                Finance
              </Link> */}
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
