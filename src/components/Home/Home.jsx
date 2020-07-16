import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import anime from "animejs";
import Works from "./Works";
import About from "./About";

const Home = () => {
  const [todos, setTodos] = useState();
  const [nextTodoId, setNextTodoId] = useState(0);
  const [newTodoLabel, setNewTodoLabel] = useState("");
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
    <React.Fragment>
      <div class="header-img"></div>
      <Works></Works>
      <About></About>
    </React.Fragment>
  );
};

export default Home;
