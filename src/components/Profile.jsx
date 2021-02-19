import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { profile: {} };
  }

  GetProfileData = async () => {
    this.setState((state) => {
      state.profile = {};
      return state;
    });
    const respData = await fetch(
      "http://localhost:5000/api/finance/profiles/1",
      {
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": [
            "application/json",
            "text/plain",
            "application/x-www-form-urlencoded",
          ],
        },
      }
    );

    const data = await respData.json();
    console.log(data);
    this.setState((state) => {
      state.profile = data;
      return state;
    });
  };

  componentDidMount = async () => {
    await this.GetProfileData();
  };

  render() {
    return (
      <React.Fragment>
        <div className="col">
          <div className="d-flex">
            <div>
              <h5>Personal Finance</h5>
              <h6>Ricardo All Ochoa</h6>
            </div>

            <div className="ml-3">
              <h5 className="text-success">Balance</h5>
              <h6 style={{ color: "#188b3e", margin: 0 }}>
                L. {this.state.profile.balanceInBooks}
              </h6>
            </div>
          </div>
        </div>
        <div className="col"></div>
        <div className="col text-right">
          <button
            className="btn btn-sm btn-primary"
            onClick={() => this.GetProfileData()}
          >
            <ion-icon name="refresh"></ion-icon>
            Refresh
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;
