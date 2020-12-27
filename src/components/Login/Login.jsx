import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        UserName: "",
        Password: "",
      },
    };
    this.style = {
      width: 200,
      letterSpacing: 4,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    };
  }

  handleChange(event) {
    // const user =
    this.setState({ credentials: event.target.value });
  }

  handleLog = () => {
    try {
      fetch("http://localhost:5000/api/login/auth", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(this.state.credentials),
      })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.log(error));
    } catch (error) {}
  };

  componentDidMount = () => {};

  render() {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
        <div
          className="shadow-lg p-3 border border-light bg-white"
          style={{ borderRadius: 12 }}
        >
          <div className="text-center m-5 ">
            <ion-icon name="person-circle" size="large"></ion-icon>
          </div>
          <div className="form-group mb-1 form-inline input-group-sm">
            {/* <h6 style={{ width: 120, letterSpacing: 5 }}>User</h6> */}
            <input
              type="text"
              className="form-control text-center border-0"
              style={this.style}
              value={this.state.credentials.UserName}
              onChange={() => this.handleChange()}
              placeholder="User"
            />
          </div>
          <div className="form-group form-inline input-group-sm">
            {/* <h6 style={{ width: 120, letterSpacing: 5 }}>Password</h6> */}
            <input
              type="password"
              className="form-control text-center border-0"
              style={this.style}
              value={this.state.credentials.Password}
              onChange={this.handleChange}
              placeholder="Password"
            />
          </div>
          <div className="text-center">
            <button
              onClick={() => this.handleLog()}
              className="btn btn-sm btn-dark"
            >
              <small>Log In</small>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
