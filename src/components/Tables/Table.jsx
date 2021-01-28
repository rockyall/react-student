import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="m-2">
          <table className="table table table-striped">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <td></td>
              <td></td>
              <td></td>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Table;
