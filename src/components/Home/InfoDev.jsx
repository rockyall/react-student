import React, { Component } from "react";

class InfoDev extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="position-sticky fixed-top h-2 bg-dark text-white">
          <div className="container">
            {" "}
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <p>Made in React with Nodejs</p>
              </div>
              <div className="col-lg-6 col-md-12 text-right">
                <button className="btn btn btn-dark btn-sm ">More info</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default InfoDev;
