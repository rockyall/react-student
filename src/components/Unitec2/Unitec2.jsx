import React, { Component } from "react";
import Card from "./Card";
import { Cookies } from "react-cookie";
import anime from "animejs";

class Unitec extends Component {
  constructor(props) {
    super(props);
    this.state = { Courses: [], SelectedCourse: null, SelectedSemana: null };
    this.cStyle = {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
    };

    this.handlerClick = (param) => {
      this.state.SelectedCourse = param;
      // console.log("this.state.SelectedCourse:", param);
      const SelectedCourseChanged = this.state.SelectedCourse;
      this.setState({ ...this.state.SelectedCourse }, () =>
        console.log("updated: ", this.state.SelectedCourse)
      );
    };

    this.OnSemanaSelected = (data) => {
      // console.log("Datafrom the UniteDetailComponent", data);
      this.state.SelectedSemana = data;
      this.setState({ ...this.state.SelectedSemana }, () => {
        console.log(
          "Now is updated the 'Semana data'",
          this.state.SelectedSemana
        );
      });
    };

    this.componentDidMount = () => {
      anime({
        targets: ".float",
        translateY: 70,
        endDelay: 300,
      });
      let cookies = new Cookies();
      const url = "http://localhost:3006/api/unitec/";
      fetch(url, {
        method: "GET", // or ‘PUexiT’
        headers: { "Content-Type": "application/json" },
        // mode: "no-cors",
      })
        .then((res) => res.json())
        .catch((error) => {
          console.log(error);
        })
        .then((result) => {
          if (!result) return;
          console.log("result", result);
          result.forEach((element) => {
            this.state.Courses.push(element);
          });
          if (result.Cookies != null) {
            const Cookieslist = result[0].Cookies;
            for (let i = 0; i < Cookieslist.length; i++) {
              const cookie = Cookieslist[i];
              window.document.cookie = `name=${cookie.name};value=${cookie.value};domain=${cookie.domain};path=${cookie.path}`;

              console.log("setting cookie", window.document.cookie);
              cookies.set(cookie.name, cookie.value, {
                domain: cookie.domain,
              });
            }
          }

          console.log("this is the state");
          this.setState({ ...this.state.Courses }, () =>
            console.log(this.state.Courses)
          );
        });
      // fetch().then(resp)
      //We have te call the endpoint of ouir Node Requrest reserver to get the data of all of ouir clases
    };
  }
  render() {
    const DynamicCard = this.state.Courses.map((resp, index) => {
      return <Card key={index} sub={resp}></Card>;
    });
    return (
      <React.Fragment>
        <div className="container-fluid ">
          <div className="row float">
            <div className="col">
              <div className="shadow-lg" style={{ borderRadius: 10 }}>
                <div
                  className="p-4 my-3 text-center bg-white"
                  style={{ borderRadius: 10 }}
                >
                  <img
                    src={require("../../images/profile/Me7.jpg")}
                    style={{ width: 150, height: 150 }}
                    className="avatar p-1 shadow bg-white mb-4"
                  />
                  <h6 className="text-center">
                    Ricardo All Ochoa Hernandez | Ceutec
                  </h6>
                  <div className="text-center">
                    <p className="text-muted">Ingenieria en Informatica</p>
                  </div>
                  <h6 className="text-center text-muted h7">
                    ricardoochoa@unitec.edu
                  </h6>
                  <h6 className="text-center text-muted h7">
                    GitHub: RickyWrong
                  </h6>
                  <h6 className="text-center text-muted h7">
                    Spotify: Rick.Space
                  </h6>
                  <h6 className="text-center text-muted h7">
                    WebSite: localhost:300//home
                  </h6>
                  <div class="list-group list-group-flush">
                    <a
                      href="#"
                      class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    >
                      Detalles
                      <span class="badge badge-primary badge-pill">14</span>
                    </a>
                    <a
                      href="#"
                      class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    >
                      Clases por cursar
                      <span class="badge badge-warning badge-pill">14</span>
                    </a>
                    <a
                      href="#"
                      class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    >
                      Historial de clases
                      <span class="badge badge-danger badge-pill">14</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row main mb-5">
            <div className="col-lg col-sm-12 text-nunitolight">
              <div className="my-3 p-4 bg-white rounded shadow">
                <h4 className="text-center pb-3">
                  Classes Actuales - 3 periodo academico
                </h4>
                {DynamicCard}
              </div>
            </div>
          </div>
          <br />
        </div>
      </React.Fragment>
    );
  }
}

export default Unitec;
