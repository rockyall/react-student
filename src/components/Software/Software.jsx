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
        <div style={{ marginTop: "50px" }}></div>
        <section>
          <h5 className="mt-5">Aviable Projects</h5>
        </section>
        <section className="pt-5 pb-5">
          <div className="container pt-5">
            <GitHubTable
              title="Software Repository"
              IsStriped={false}
              classParam={this.style}
            ></GitHubTable>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Software;
