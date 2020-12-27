import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import anime from "animejs";

const Header = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/history");
  }

  useEffect(() => {
    var option = {
      opacityIn: [0, 1],
      ScaleIn: [0.2, 1],
      Scaelout: 3,
      durationIn: 800,
      durationOut: 800,
      delay: 500,
      easing: "easeInExpo",
    };

    anime
      .timeline({ loop: false })
      .add({
        targets: ".text-animated .one",
        opacity: option.opacityIn,
        scale: option.ScaleIn,
        duration: option.durationIn,
      })
      .add({
        targets: ".text-animated .one",
        opacity: 0,
        scale: option.Scaelout,
        easing: option.easing,
        duration: option.durationOut,
        delay: option.delay,
      })
      .add({
        targets: ".text-animated .two",
        opacity: option.opacityIn,
        scale: option.ScaleIn,
        duration: option.durationIn,
      })
      .add({
        targets: ".text-animated .two",
        opacity: 0,
        scale: option.Scaelout,
        easing: option.easing,
        duration: option.durationOut,
        delay: option.delay,
      })
      .add({
        targets: ".text-animated .three",
        opacity: option.opacityIn,
        scale: option.ScaleIn,
        duration: option.durationIn,
      })
      .add({
        targets: ".text-animated .three",
        opacity: 0,
        scale: option.Scaelout,
        easing: option.easing,
        duration: option.durationOut,
        delay: option.delay,
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
          <div className="card-body text-center">
            {/* <h5
              id="Title-RicardoAll"
              className="card-title text-light"
              style={{ fontSize: 60 }}
            >
              Welcome to my little{" "}
              <span style={{ color: "#ffff00d6" }}>spot</span>
            </h5> */}
            <div className="text-animated">
              <span className="one">Hello Friend!</span>
              <span className="two">I am Ricardo All</span>
              <span className="three">a tech.</span>
            </div>
          </div>
        </div>
        <div style={{ height: "100vh" }}></div>
      </div>
    </div>
  );
};

export default Header;
