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
        <section className="pt-5 pb-5">
          <div className="container pt-5 mt-5">
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
            <div className="row">
              <div className="col">
                <GitHubTable
                  title="Software Repository"
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
