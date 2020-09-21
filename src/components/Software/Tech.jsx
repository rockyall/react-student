import React, { Component } from "react";
import GitHubTable from "../Tables/GitHubTable";

class Tech extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <section className="pb-5">
          {/* <h3 className="text-muted">Software Repository</h3> */}
          <h2 className="display-4">Light Blog</h2>{" "}
          <GitHubTable
            title="Software Repository"
            IsStriped={false}
          ></GitHubTable>
        </section>
      </React.Fragment>
    );
  }
}

export default Tech;
