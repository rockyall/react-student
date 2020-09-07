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
    <div class="header-img">
      <div className="d-flex align-items-center justify-content-center">
        <div style={{ height: "100vh" }}></div>
        <div class="text-center ">
          {/* <img
            src={require("../../images/profile/Me.jpg")}
            style={{ width: 150, height: 150 }}
            className="avatar "
          /> */}
          <div class="card-body">
            <h5
              id="RicardoAll"
              class="card-title text-light"
              style={{ fontSize: 60 }}
            >
              Ricardo All
            </h5>
            <p class="card-text text-light" style={{ fontSize: 15 }}>
              Technology enthusiast.
            </p>
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
