import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import anime from "animejs";

const Header = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/history");
  }

  useEffect(() => {
    let animateionFirst = anime({
      targets: "#imagAvatar",
      opacity: 1,
      rotate: {
        value: 360,
        duration: 6000,
      },
      delay: (elm, index, t) => index * 20,
      loop: true,
    });
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
    <div id="Main-header" style={{ backgroundColor: "black" }}>
      <div className="d-flex align-items-center justify-content-center">
        <div style={{ height: "100vh" }}></div>
        <div className="text-center ">
          <img
            id="imagAvatar"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Inverted_Pentagram.svg/497px-Inverted_Pentagram.svg.png"
            style={{ width: 150, height: 150 }}
            className="avatar p-1 shadow bg-white mb-4"
          />
          <div className="card-body text-center">
            <h2 className="card-title text-light">Hello, I'm Ricardo All</h2>
            {/* <div className="text-animated">
              <span className="one">Hello Friend!</span>
              <span className="two">I am Ricardo All</span>
              <span className="three">a tech.</span>
            </div> */}
          </div>
        </div>
        <div style={{ height: "100vh" }}></div>
      </div>
      <div
        className="bg-secondary"
        style={{ height: 20, weight: "100%" }}
      ></div>
    </div>
  );
};

export default Header;
