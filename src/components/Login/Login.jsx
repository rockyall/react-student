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

  handleLog = () => {};
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-warning">
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
              placeholder="User"
            />
          </div>
          <div className="form-group form-inline input-group-sm">
            {/* <h6 style={{ width: 120, letterSpacing: 5 }}>Password</h6> */}
            <input
              type="password"
              className="form-control text-center border-0"
              style={this.style}
              placeholder="Password"
            />
          </div>
          <div className="text-center">
            <button
              onClick={() => this.handleLog()}
              className="btn btn-sm btn-dark  btn-block"
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
