import React, { Component } from "react";
import { Table } from "react-bootstrap";

class GitHubTable extends Component {
  constructor(props) {
    super();
    this.state = {};
    this.style = { height: "410px", overflowY: "auto" };
  }

  render() {
    const {
      IsStriped,
      IsHover,
      Size,
      IsBordered,
      classParam,
      title,
    } = this.props;

    return (
      <React.Fragment>
        <h3 className="mt-5">{title}</h3>
        <Table
          striped={IsStriped}
          hover={IsHover}
          size={Size}
          bordered={IsBordered}
          className={classParam}
        >
          <tr>
            <td className="p-0">
              <table className="m-0 table">
                <tr>
                  <th>Title</th>
                  <th style={{ width: 600 }}>Description</th>
                  <th>Language</th>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td className="p-0">
              <div style={this.style}>
                <table className="m-0 table">
                  <tr>
                    <td>Web Browser Automation</td>
                    <td style={{ width: 600 }}>
                      Scraping data from university portal. This is an
                      experimental work to get data from a website and send it
                      through an endpoint in NodeJS with express.
                    </td>
                    <td>@mdo</td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
        </Table>
      </React.Fragment>
    );
  }
}

export default GitHubTable;
