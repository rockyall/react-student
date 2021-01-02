import React, { Component } from "react";
import GitHubTable from "../Tables/GitHubTable";
import Tech from "./Tech";

class Software extends Component {
  constructor(props) {
    super();
    this.state = {};
    this.style = {
      height: "500px",
      overflowY: "auto",
      boxShadow: "#8080805e 0px 1rem 2rem",
    };
  }
  render() {
    return (
      <React.Fragment>
        <section className="pb-5">
          
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="d-flex">
                  <img
                    className="p-1 shadow-sm"
                    style={{
                      objectFit: "cover",
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                    src={require("../../images/profile/Me5.jpg")}
                  ></img>
                  <h5 className="font-weight-bolder m-2">Ricardo All Ochoa</h5>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col">
                <h4 className=" font-weight-bolder h4">
                  RAP SHEET - Web Interface Version
                </h4>
                <p className="font-weight-bolder">
                  Form Need For Speed Most Wanted - 2005
                </p>
              </div>
              <div className="col ">
                <div className="text-right p-3">
                  <a
                    target="_blank"
                    href="https://github.com/rockyall/rap-sheet.git"
                    style={{ cursor: "pointer" }}
                    className="text-muted font-weight-bolder"
                  >
                    Code Source
                  </a>
                  <p className="text-muted">Last Update: 1/25/2020</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="text-center  ">
                  <img
                    className="shadow-lg"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      borderRadius: 10,
                    }}
                    src={require("../../images/Projects/rockport/rockportLogin2.png")}
                  ></img>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12">
                <div className="d-flex">
                  <img
                    className="p-1 shadow-sm"
                    style={{
                      objectFit: "cover",
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                    src={require("../../images/profile/Me5.jpg")}
                  ></img>
                  <h5 className="font-weight-bolder m-2">Ricardo All Ochoa</h5>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-12">
                <h3 className="font-weight-bolder">Software Repository</h3>
              </div>
              <div className="col-12">
                <p className="font-weight-bolder text-dark">
                  GitHub - rockyall
                </p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col">
                <GitHubTable
                  IsStriped={false}
                  classParam={this.style}
                ></GitHubTable>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Software;
