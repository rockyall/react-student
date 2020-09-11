import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import anime from "animejs";

const Header = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/history");
  }

  useEffect(() => {
    anime({
      targets: ".bbtn-1",
      translateY: -20,
      endDelay: 100,
    });
  });

  return (
    <div className="header-img">
      <div className="d-flex align-items-center justify-content-center">
        <div style={{ height: "100vh" }}></div>
        <div className="text-center ">
          {/* <img
            src={require("../../images/profile/Me.jpg")}
            style={{ width: 150, height: 150 }}
            className="avatar "
          /> */}
          <div className="card-body">
            <h5
              id="Title-RicardoAll"
              className="card-title text-light"
              style={{ fontSize: 60 }}
            >
              Welcome to my little{" "}
              <span style={{ color: "#2ba594" }}>spot</span>
            </h5>
            <h1
              id="SubTitle-RicardoAll p-0"
              style={{ marginBottom: 0 }}
              className="card-title text-white"
            >
              Ricardo All
            </h1>
            {/* <button className></button> */}
            <p className="card-text text-white" style={{ fontSize: 12 }}>
              Technology enthusiast.
            </p>
            {/* <button className="btn btn-primary">More</button> */}
            {/* <p id="subRick" class="card-text text-light">
              <small class="text-muted">The art of automation</small>
            </p>

            <button className="custo-1 btn btn-dark">Contact</button> */}
            {/* <div id="ricky"></div> */}
          </div>
        </div>
        <div style={{ height: "100vh" }}></div>
      </div>
    </div>
  );
};

export default Header;
