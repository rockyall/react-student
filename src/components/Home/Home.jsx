import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import anime from "animejs";
import InfoDev from "./InfoDev";
import About from "./About";
import Header from "./Header";
// import Picture from "../../images/profile/Me.jpg";

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
    <main className="d-flex">
      <Header></Header>
      {/* <Works></Works> */}
      <About></About>
    </main>
  );
};

export default Home;
