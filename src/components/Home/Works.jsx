import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import anime from "animejs";
import Card from "../sub-components/Card";

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
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="d-flex justify-content-center p-3">
                <h3 style={{ padding: "10px" }}>Working </h3>
              </div>
              <div className="d-flex justify-content-center flex-wrap p-3">
                <button className="bbtn-1 btn-warning" onClick={handleClick}>
                  Password Managemnet
                </button>
                <button className="bbtn-1 btn-danger" onClick={handleClick}>
                  WebBrowser Automation
                </button>
              </div>
              <div className="d-flex justify-content-center p-3">
                <Card></Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
