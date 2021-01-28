import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import anime from "animejs";

const Header = () => {
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
        <div style={{ height: "100vh" }}>
          {/* <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "#a3e23f",
            }}
          ></div> */}
        </div>
        <div className="text-center">
          <img
            id="imagAvatar"
            src={require("../../images/BeeingCreative5.png")}
            style={{ width: 25, height: 25 }}
            className="avatar p-1  bg-white mb-4 shadow"
          />
          <img
            id="imagAvatar"
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_324666.png&f=1&nofb=1"
            style={{ width: 50, height: 50 }}
            className="avatar p-1  bg-white mb-4 "
          />
          <img
            src={require("../../images/profile/Me5.jpg")}
            style={{ width: 150, height: 150 }}
            className="avatar p-1 shadow bg-white mb-4"
          />
          <img
            id="imagAvatar"
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_324666.png&f=1&nofb=1"
            style={{ width: 50, height: 50 }}
            className="avatar p-1  bg-white mb-4 "
          />
          <img
            id="imagAvatar"
            src={require("../../images/BeeingCreative5.png")}
            style={{ width: 25, height: 25 }}
            className="avatar p-1  bg-white mb-4 shadow"
          />
          <div className="card-body text-center">
            <h2 className="card-title text-dark">Hello, I'm Ricardo All</h2>
            <h6 className="card-title text-dark">Software Engineer | Ceutec</h6>
            <div>
              <button
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
              </button>
            </div>
            <div></div>
          </div>
        </div>
        <div style={{ height: "100vh" }}></div>
      </div>
    </div>
  );
};

export default Header;
