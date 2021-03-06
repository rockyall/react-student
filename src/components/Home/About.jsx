import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GitHubTable from "../Tables/GitHubTable";
import anime from "animejs";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.style = {
      height: "500px",
      overflowY: "auto",
    };
    this.PythonSt = { color: "#FD8922" };
    this.JavaScriptSt = { color: "#ffe539" };
    this.CSharpSt = { color: "#22c9dc" };
  }

  componentDidMount = () => {
    var AnTime = anime.timeline({
      easing: "easeOutExpo",
      duration: 750,
    });

    AnTime.add({
      targets: "#level",
      width: "75%",
      easing: "easeInOutQuad",
    });
    AnTime.add({
      targets: "#level2",
      width: "65%",
      easing: "easeInOutQuad",
    });
    AnTime.add({
      targets: "#level3",
      width: "60%",
      easing: "easeInOutQuad",
    });
  };

  render() {
    return (
      <React.Fragment>
        <section
          className="section section-responsive"
          style={{ backgroundColor: "rgb(24 24 24)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="card-body text-center">
                  {/* <img
              id="imagAvatar"
              src={require("../../images/BeeingCreative5.png")}
              style={{ width: 50, height: 50, color: "#111111" }}
              className="avatar p-1  mb-4 "
            /> */}
                  <img
                    src={require("../../images/profile/Me5.jpg")}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: "50%",
                      backgroundColor: "black",
                    }}
                    className="avatar p-1 shadow-lg mb-4"
                  />
                  {/* <img
              id="imagAvatar"
              src={require("../../images/BeeingCreative5.png")}
              style={{ width: 50, height: 50, color: "#111111" }}
              className="avatar p-1 mb-4"
            /> */}
                </div>
              </div>
              <div className="col-12">
                <h2 className="text-left" style={{ color: "#dddddd" }}>
                  A Moment to Myself
                  {/* <span className="text-white" style={{ fontSize: "10px" }}>
                        - <strong>a deadmau5 song title</strong>{" "}
                      </span> */}
                </h2>
              </div>
              <div className="col-12 ">
                <h6
                  style={{
                    fontSize: 15,
                    color: "#eeeeee",
                    textAlign: "justify",
                  }}
                >
                  Starting with the curiousness and the ambitious to make
                  something for my own when I started collage, now beside my
                  other activities, have become part of my daily as a developer,
                  I always consider myself as a begginer when I started doing
                  something or trying to learn some new concepts, Experimental
                  projects like the browser automation has been a good way for
                  me to learn how this stuff works, in my journey of learning
                  and collage I could complement the science of it and get
                  knowledge of how many busnesses incorporate diffrent aspects
                  of many kinds of technologies for specific reasons in
                  particular following along with best practices. This is just
                  the begining of the journey...
                </h6>
              </div>
              {/* <div className="col-12">
                <h4 className="mt-4 text-white">Lenguages</h4>
                <hr />
                <div className="row">
                  <div className="col-4" style={this.CSharpSt}>
                    <ion-icon name="logo-windows"></ion-icon>
                    CSharp (C#)
                  </div>
                  <div className="col">
                    <div
                      id="level"
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#22c9dc",
                      }}
                    />
                  </div>
                  <div className="col-1" style={this.CSharpSt}>
                    75%
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-4" style={this.PythonSt}>
                    <ion-icon name="logo-python"></ion-icon>
                    Python
                  </div>
                  <div className="col">
                    <div
                      id="level2"
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#FD8922",
                      }}
                    />
                  </div>
                  <div className="col-1" style={this.PythonSt}>
                    65%
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-4" style={this.JavaScriptSt}>
                    <ion-icon name="logo-javascript"></ion-icon>
                    JavaScript
                  </div>
                  <div className="col">
                    <div
                      id="level3"
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#ffe539",
                      }}
                    />
                  </div>
                  <div className="col-1" style={this.JavaScriptSt}>
                    60%
                  </div>
                </div>
              </div>
             */}
            </div>

            {/* <div
              className="row align-items-center justify-content-center text-dark pt-5 pb-5"
              style={{ height: "550px", overflowY: "auto" }}
            >
              <div className="col-lg col-md-12">
                <span className="font-weight-bolder h4">My daily</span>
                <ul>
                  <li>
                    <span className="font-weight-bolder h6">DataBases</span>
                    <ul>
                      <li>MongoDB</li>
                      <li>MySQL</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-weight-bolder h6">
                      Frameworks/Libraries
                    </span>
                    <ul>
                      <li>Blazor Server/WebAssambly</li>
                      <li>ReactJS</li>
                      <li>NodeJS/ExpressJs</li>
                      <li className="text-muted">VueJS</li>
                      <li>Selenium/BeautifulSoup/Request</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-weight-bolder h6">Languages</span>
                    <ul>
                      <li>C#</li>
                      <li>Python</li>
                      <li>JavaScript</li>
                    </ul>
                    <span className="font-weight-bolder h6">
                      Markup Language
                    </span>
                    <ul>
                      <li>HTML/CSS</li>
                      <li>XAML (WPF)</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="col-lg col-md-12">
                <li class="list-unstyled">
                  <span className="font-weight-bolder h4">
                    Software Development
                  </span>
                  <ul>
                    <li>
                      C#/JavaScript/Python Automation. CPU bound business logic
                    </li>
                    <li>WPF desktop apps with the MVVM Pattern Design</li>
                    <li>High level programming</li>
                    <li>Web Scraping</li>
                    <li>APIs, FullStack web apps</li>
                  </ul>
                </li>
                <ul></ul>
              </div>
              <div className="col-lg col-md-12">
                <span className="font-weight-bolder h4">
                  Software development process
                </span>
                <ul>
                  <li>
                    <span className="font-weight-bolder h6">
                      Agile development methodology
                    </span>
                    <ul>
                      <li>SCRUM</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-weight-bolder h6">Tools</span>
                    <ul>
                      <li>Git Workflow</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </section>

        <section
          className="section"
          style={{ padding: "50px", backgroundColor: "rgb(37 37 37)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12  text-center">
                <h2 className="text-white ">¯\_(ツ)_/¯</h2>
              </div>
            </div>
            {/* <div
              className="row align-items-center justify-content-center text-dark pt-5 pb-5"
              style={{ height: "550px", overflowY: "auto" }}
            >
              <div className="col-lg col-md-12">
                <span className="font-weight-bolder h4">My daily</span>
                <ul>
                  <li>
                    <span className="font-weight-bolder h6">DataBases</span>
                    <ul>
                      <li>MongoDB</li>
                      <li>MySQL</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-weight-bolder h6">
                      Frameworks/Libraries
                    </span>
                    <ul>
                      <li>Blazor Server/WebAssambly</li>
                      <li>ReactJS</li>
                      <li>NodeJS/ExpressJs</li>
                      <li className="text-muted">VueJS</li>
                      <li>Selenium/BeautifulSoup/Request</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-weight-bolder h6">Languages</span>
                    <ul>
                      <li>C#</li>
                      <li>Python</li>
                      <li>JavaScript</li>
                    </ul>
                    <span className="font-weight-bolder h6">
                      Markup Language
                    </span>
                    <ul>
                      <li>HTML/CSS</li>
                      <li>XAML (WPF)</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="col-lg col-md-12">
                <li class="list-unstyled">
                  <span className="font-weight-bolder h4">
                    Software Development
                  </span>
                  <ul>
                    <li>
                      C#/JavaScript/Python Automation. CPU bound business logic
                    </li>
                    <li>WPF desktop apps with the MVVM Pattern Design</li>
                    <li>High level programming</li>
                    <li>Web Scraping</li>
                    <li>APIs, FullStack web apps</li>
                  </ul>
                </li>
                <ul></ul>
              </div>
              <div className="col-lg col-md-12">
                <span className="font-weight-bolder h4">
                  Software development process
                </span>
                <ul>
                  <li>
                    <span className="font-weight-bolder h6">
                      Agile development methodology
                    </span>
                    <ul>
                      <li>SCRUM</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-weight-bolder h6">Tools</span>
                    <ul>
                      <li>Git Workflow</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
