import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GitHubTable from "../Tables/GitHubTable";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.style = {
      height: "500px",
      overflowY: "auto",
    };
    this.letter = { backgroundColor: "#191919" };
  }
  render() {
    return (
      <React.Fragment>
        <section className="section" style={this.letter}>
          <div className="container">
            <div className="row pt-5 pb-5 pl-0">
              <div className="col">
                <h2
                  className="text-left text-white"
                  style={{ letterSpacing: 5 }}
                >
                  My Work
                </h2>
              </div>
            </div>
            <div className="row pt-0 pb-5">
              <div className="col-12">
                <h6 className="text-white" style={{ fontSize: 15 }}>
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
            </div>
            <div
              className="row align-items-center justify-content-center text-white pt-5 pb-5"
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
                  <li className="text-muted">
                    <span className="font-weight-bolder h6">Tools</span>
                    <ul>
                      <li>GitHub Workflow</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div
              className="row align-items-end justify-content-center"
              style={{ height: "300px" }}
            >
              <div className="col-10 text-center">
                <blockquote class="blockquote text-center text-white">
                  <p class="mb-0 h6">
                    Music's a good thing, it calm the beast in the man.{" "}
                  </p>
                  <footer class="blockquote-footer">
                    Joseph Stalin <cite title="Source Title"></cite>
                  </footer>
                </blockquote>
              </div>
            </div> */}
            <br />
            <br />
            <br />
          </div>
        </section>
        <div className="bg-danger" style={{ height: 5, width: "100%" }}></div>
        <div className="bg-dark" style={{ height: 5, width: "100%" }}></div>
        <div className="bg-white" style={{ height: 5, width: "100%" }}></div>
        <div className="bg-dark" style={{ height: 5, width: "100%" }}></div>
        <section>
          <div className="container">
            <div className="d-flex flex-row justify-content-center bd-highlight mb-3 m-auto">
              <div className="col-12">
                <GitHubTable
                  IsStriped={false}
                  title="Recent Work"
                  classParam={this.style}
                />
              </div>
            </div>
            <div className="d-flex flex-row justify-content-start bd-highlight mb-3">
              <div className="col-12">
                <ul className="list-unstyled">
                  <span className="font-weight-bolder h4">
                    Future Ventures (in {new Date().getFullYear()})
                  </span>
                  <li>
                    <ul>
                      <li>
                        Learning middle-level to low-level prgoamming lenguages
                        (C++ and Assambly)
                      </li>
                      <li>Get involve in low-level programing proyects </li>
                      <li>
                        Scalable distributed system (Arquitecture, network,
                        microservicess)
                      </li>
                      <li>Microcontrollers and Microprocessors</li>
                      <li>AI/Machine Learning</li>
                      <li>Pattern Designs</li>
                      <li>Mobile cross platform apps</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-center bd-highlight mb-3">
              <Link to="/home" className="btn btn-sm btn-dark m-5">
                Home{" "}
              </Link>
              <Link to="/home" className="btn btn-sm btn-dark m-5">
                Contact
              </Link>
              {/* <div className="col-12">
              </div> */}
            </div>
          </div>

          {/* <div className="container">
            <div className="row">
            <div className="col-lg-12"></div>
            </div>
          </div> */}
        </section>
      </React.Fragment>
    );
  }
}

export default About;
