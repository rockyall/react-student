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
        <h4>Hellow history ded</h4>
        <h4>Hellow historyss</h4>
        <button className="btn btn-primary" onClick={this.OnHomeHandle}>
          Home button
        </button>
      </React.Fragment>
    );
  }
}

export default withRouter(History);
