import React, { Component } from "react";
import UnitecDetail from "./UnitecDetail";
import UnitecContent from "./UnitecContent";
import { Cookies } from "react-cookie";

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
      let cookies = new Cookies();
      const url = "http://localhost:3005/api/UnitecClass/";
      fetch(url, {
        method: "GET", // or ‘PUT’
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
    const DynamicTR = this.state.Courses.map((resp, index) => {
      return (
        <tr key={index}>
          <th className="text-center" scope="row">
            {index + 1}
          </th>
          {/* <td>{resp._id}</td> */}
          <td>{resp.NameClass}</td>
          <td className="text-center">{resp.lstSemana.length}</td>
          <td>{resp.Estado}</td>
          <td className="text-center">{resp.Seccion}</td>
          <td>
            <div
              className="text-center btn-group tex"
              role="group"
              style={{ display: "block" }}
              aria-label="Basic example"
            >
              <button
                type="button"
                className="btn btn-light"
                onClick={(e) => this.handlerClick(resp)}
              >
                Info
              </button>
              <button type="button" className="btn btn-light">
                Recursos <span className="badge badge-light">{}</span>
              </button>
              <button type="button" className="btn btn-light">
                Actividades{" "}
                {this.state.Courses && (
                  <span className="badge badge-info">
                    {this.state.Courses.length}
                  </span>
                )}
              </button>
            </div>
          </td>
          <td>
            <div className="text-center">
              <div
                class="spinner-border  spinner-border-sm text-secondary"
                role="status"
                aria-hidden="true"
              ></div>
            </div>
          </td>
        </tr>
      );
    });
    return (
      <React.Fragment>
        {/* <h2>Data will go here</h2> */}
        <div className="row">
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col-1 col-sm"></div>
          <div className="col-md-12">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  {/* <th scope="col">id</th> */}
                  <th scope="col">Clase</th>
                  <th scope="col">Semana</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Seccion</th>
                  <th scope="col" style={{ textAlign: "center" }}>
                    Action
                  </th>
                  <th scope="col" style={{ textAlign: "center" }}>
                    Bot is busy
                  </th>
                </tr>
              </thead>
              <tbody>{DynamicTR}</tbody>
            </table>
          </div>
          <div className="col-1 col-sm"></div>
        </div>
        <br />
        <div className="row">
          <div className="col-1"></div>
          <div className="col">
            {this.state.SelectedCourse && (
              <UnitecDetail
                CurrentItem={this.state.SelectedCourse}
                OnSemanaSelected={this.OnSemanaSelected}
              ></UnitecDetail>
            )}
          </div>
          <div className="col-1"></div>
        </div>
        <br />
        <div className="row">
          <div className="col-1"></div>
          <div className="col">
            {this.state.SelectedSemana && (
              <UnitecContent
                CurrentSemana={this.state.SelectedSemana}
              ></UnitecContent>
            )}
          </div>
          <div className="col-1"></div>
        </div>

        {/* <ion-icon style={this.style} name="logo-react" size="large"></ion-icon>
        <ion-icon style={this.style} name="logo-nodejs" size="large"></ion-icon>
        <ion-icon style={this.style} name="logo-github" size="large"></ion-icon> */}
      </React.Fragment>
    );
  }
}

export default Unitec;
