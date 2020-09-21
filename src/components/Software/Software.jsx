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
          {/* <h3 className="text-muted">Software Repository</h3> */}
          <GitHubTable
            title="Software Repository"
            IsStriped={false}
            classParam={this.style}
          ></GitHubTable>
        </section>
        <Tech />
      </React.Fragment>
    );
  }
}

export default Software;
