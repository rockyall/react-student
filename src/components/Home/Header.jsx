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
        <div className="text-center ">
          <img
            id="imagAvatar"
            src={require("../../images/BeeingCreative5.png")}
            style={{ width: 150, height: 150 }}
            className="avatar p-1 shadow bg-white mb-4"
          />
          <div className="card-body text-center">
            <h2 className="card-title text-dark">Hello, I'm Ricardo All</h2>
            <h6 className="card-title text-dark">Software Engineer | Ceutec</h6>
          </div>
        </div>
        <div style={{ height: "100vh" }}></div>
      </div>
    </div>
  );
};

export default Header;
