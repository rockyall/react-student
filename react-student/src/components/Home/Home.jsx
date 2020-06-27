import React, { Component } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/history");
  }

  return (
    <React.Fragment>
      <h5>the home goes here</h5>
      <button className="btn btn-info" onClick={handleClick}>
        Class History
      </button>
    </React.Fragment>
  );
};

export default Home;
