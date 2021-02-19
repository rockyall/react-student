import React, { Component } from "react";

class IsBusy extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div
          disable={this.props.isBusy ? this.props.isBusy : !this.props.isBusy}
          class="spinner-border"
          role="status"
        >
          <span class="sr-only">Loading...</span>
        </div>
      </React.Fragment>
    );
  }
}

export default IsBusy;
