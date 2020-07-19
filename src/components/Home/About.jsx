import React, { Component } from "react";
import Card from "../sub-components/Card";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <section className="section" style={{ backgroundColor: "#151515" }}>
          <div className="container">
            <div className="row p-5">
              <div className="col ">
                <h2 className="text-center text-white">About Me</h2>
              </div>
            </div>
            <div className="row pt-0 pb-5">
              <div className="col-12">
                <h6 className="text-white">
                  I am guy with ambisious to learn wath get my attention, in my
                  journey of learning and collage I have never thought I will
                  end up writing programs to resolve little problems in wich
                  solutions are in my head write code to represent that solution
                  to work. This become one of my hobbies rather than to listen
                  to music, deadmau5 my unique artist that inspire me in some
                  particualry ways.
                </h6>
              </div>
            </div>
            <div
              className="row align-items-center justify-content-center text-white pt-5"
              style={{ height: "500px" }}
            >
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
                    <li>
                      Trying not to blow y mind with too much exciting things
                    </li>
                  </ul>
                </li>
                <ul></ul>
              </div>
              <div className="col-lg col-md-12">
                <span className="font-weight-bolder h4">The day at day</span>
                <ul>
                  <li>
                    <span className="font-weight-bolder h6">DataBases</span>
                    <ul>
                      <li>MongoDB</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-weight-bolder h6">
                      Frameworks/Libraries
                    </span>
                    <ul>
                      <li>ReactJS</li>
                      <li>NodeJS/ExpressJs</li>
                      <li>Selenium/BeautifulSoup/Request</li>
                      <li>Blazor Server/WebAssambly</li>
                    </ul>
                  </li>
                </ul>
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
                </ul>
              </div>
            </div>
            <div
              className="row align-items-end justify-content-center"
              style={{ height: "300px" }}
            >
              <div className="col-10 text-center">
                <blockquote class="blockquote text-center text-white">
                  <p class="mb-0">
                    Music's a good thing, it calm the beast in the man.{" "}
                  </p>
                  <footer class="blockquote-footer">
                    Joseph Stalin <cite title="Source Title"></cite>
                  </footer>
                </blockquote>
              </div>
            </div>
            <br />
            <br />
          </div>
        </section>
        <section style={{ height: "500px" }}>
          <div className="contaner">
            <div
              className="row justify-content-around align-items-center flex-wrap"
              style={{ height: "600px" }}
            >
              <div colName="col-12">
                <div className="align-self-center">
                  <ul className="list-unstyled">
                    <span className="font-weight-bolder h4">
                      Future Ventures
                    </span>
                    <li>
                      <ul>
                        <li>
                          Scalable distributed system (Arquitecture, network,
                          microservicess)
                        </li>
                        <li>Microcontrollers and Microprocessors</li>
                        <li>AI/Machine Learning</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-around flex-wrap"></div>
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
