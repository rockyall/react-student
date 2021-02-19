import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import anime from "animejs";

const Header = () => {
  const NavTextRight = {
    color: "gray",
    fontSize: 12,
    textDecoration: "none",
  };

  let history = useHistory();

  function handleClick() {
    history.push("/history");
  }

  useEffect(() => {
    // let animateionFirst = anime({
    //   targets: "#imagAvatar",
    //   opacity: 1,
    //   rotate: {
    //     value: 360,
    //     duration: 6000,
    //   },
    //   delay: (elm, index, t) => index * 20,
    //   loop: true,
    // });
    let tl = anime.timeline({
      duration: 2000,
      complete: function () {
        tl.restart();
      },
    });

    tl.add({
      targets: "#imagAvatar",
      rotate: {
        value: 360,
      },

      easing: "linear",
      direction: "alternate",
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

    anime({
      targets: "#photoMe",
      translateY: {
        value: -50,
      },
      translateX: {
        value: 250,
      },
      rotate: {
        value: 30,
        duration: 5000,
        easing: "easeInOutSine",
      },
      opacity: 1,
      direction: "alternate",
    });

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
    <div id="Main-header">
      <div className="d-flex align-items-center justify-content-center">
        <div style={{ height: "100vh" }}></div>

        <div className="card-body text-center">
          <div className="card-body text-center">
            {/* <img
              id="imagAvatar"
              src={require("../../images/BeeingCreative5.png")}
              style={{ width: 50, height: 50, color: "#111111" }}
              className="avatar p-1  mb-4 "
            /> */}
            <img
              src={require("../../images/profile/Me5.jpg")}
              style={{
                width: 300,
                height: 300,
                borderRadius: "50%",
                backgroundColor: "black",
              }}
              className="avatar p-1 shadow-lg mb-4"
            />
            {/* <img
              id="imagAvatar"
              src={require("../../images/BeeingCreative5.png")}
              style={{ width: 50, height: 50, color: "#111111" }}
              className="avatar p-1 mb-4"
            /> */}
          </div>
          <h2 className="card-title text-white">Hello, I'm Ricardo All</h2>
          <h6 className="card-title" style={{ color: "#bbbbbb" }}>
            IT Engineer | Ceutec
          </h6>

          <div>
            {/* <button
                id="photoMe"
                className="btn"
                style={{
                  opacity: "0",
                  backgroundColor: "white",
                  textDecoration: "none",
                  border: "3px solid black",
                }}
              >
                Hi there! :)
              </button> */}
          </div>
        </div>

        <div style={{ height: "100vh" }}></div>
      </div>
    </div>
  );
};

export default Header;
