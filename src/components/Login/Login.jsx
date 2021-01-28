import React, { Component } from "react";
import { withCookies, Cookies } from "react-cookie";

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

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState((state) => {
      state.credentials[name] = value;
      return state;
    });
  };

  handleLog = () => {
    try {
      console.log("Sending request ot server");
      console.table(this.state.credentials);
      console.log(this.state.credentials);
      const userData = this.state.credentials;
      fetch(`http://localhost:64183/api/auth/login/`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.credentials),
      })
        .then((resp) => {
          console.log("resp");
          console.table(resp);
        })
        .then((data) => {
          console.log("data");
          console.log(data);
        });
    } catch (error) {
      console.log(error);
      console.table(error);
    }
  };

  componentDidMount = () => {
    const storedJwt = localStorage.getItem("token");
  };

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
              name="UserName"
              className="form-control text-center border-0"
              style={this.style}
              value={this.state.credentials.UserName}
              onChange={this.handleChange}
              placeholder="User"
            />
          </div>
          <div className="form-group form-inline input-group-sm">
            {/* <h6 style={{ width: 120, letterSpacing: 5 }}>Password</h6> */}
            <input
              type="password"
              name="Password"
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
