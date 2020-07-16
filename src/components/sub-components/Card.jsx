import React, { Component } from "react";
import anime from "animejs";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    anime({
      targets: ".mywork",
      translateY: -20,
      endDelay: 150,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div class="mywork card text-white bg-light mb-3 p-3">
          {/* <div class="card-header"></div> */}
          <div class="card-body">
            {/* <h5 class="card-title"></h5> */}
            <p class="card-text">
              <h6>
                I am a collage graduate studying system engineer and a
                self-learner basics of computer science, doing the procces of
                learning I could achive some feedback from proyects that I
                personaly had in my head and make it work learning multiple
                concepts of software development in my journey of collage and
                experience at work.
              </h6>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Card;
