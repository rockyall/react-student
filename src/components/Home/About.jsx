import React, { Component } from "react";
import Card from "../sub-components/Card";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="section" style={{ backgroundColor: "#1B2028" }}>
        <div className="container">
          <div className="row">
            <div className="col p-5">
              <h2 className="text-center day">A little About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h1 className="day">.\</h1>
              <h4 className="day">
                I am ambisuis guy that never thought that I could end up studying computer scinece and 
                to know more in deep about the IT techology that now days what I feel 
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <video autoplay muted loop id="myVideo">
                <source src="rain.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </section>
    );
  }
}

export default About;
