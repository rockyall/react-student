import React, { Component } from "react";
import { Table } from "react-bootstrap";

class GitHubTable extends Component {
  constructor(props) {
    super();
    this.state = {};
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
        <h3 className="mt-5 font-weight-bolder h4">{title}</h3>
        <div style={classParam}>
          <Table
            striped={IsStriped}
            hover={IsHover}
            size={Size}
            bordered={IsBordered}
            className="text-left"
          >
            <thead>
              <tr>
                <th>Title</th>
                <th style={{ width: 600 }}>Description</th>
                <th>Language</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Web Browser Automation</td>
                <td>
                  Scraping data from university portal. This is an experimental
                  work to get data from a website and send it through an
                  endpoint in NodeJS with express.
                </td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>Web Browser Automation</td>
                <td>
                  Scraping data from university portal. This is an experimental
                  work to get data from a website and send it through an
                  endpoint in NodeJS with express.
                </td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>Web Browser Automation</td>
                <td>
                  Scraping data from university portal. This is an experimental
                  work to get data from a website and send it through an
                  endpoint in NodeJS with express.
                </td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>Web Browser Automation</td>
                <td>
                  Scraping data from university portal. This is an experimental
                  work to get data from a website and send it through an
                  endpoint in NodeJS with express.
                </td>
                <td>@mdo</td>
              </tr>

              <tr>
                <td>Web Browser Automation</td>
                <td>
                  Scraping data from university portal. This is an experimental
                  work to get data from a website and send it through an
                  endpoint in NodeJS with express.
                </td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </React.Fragment>
    );
  }
}

export default GitHubTable;
