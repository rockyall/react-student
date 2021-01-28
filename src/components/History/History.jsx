import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  OnHomeHandle = () => {
    this.props.history.push("/home");
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(History);
