import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.style = { margin: 0 };
  }


  render() {
    const ButtonWeek = this.props.sub.lstSemana.map((resp, index) => {
      return (
        <button
          key={index}
          type="button"
          class="btn btn-outline-dark btn-sm m-1"
        >
          Semana {resp.Semana} |
          <span class="badge badge-dark">{resp.Actividades.length}</span>
        </button>
      );
    });
    return (
      <React.Fragment>
        {/* <div class="media mb-4">
          <img
            class="align-self-center mr-3"
            src={require("../../../images/BeeingCreative4.png")}
            style={{ width: 100, height: 100, borderRadius: 13 }}
            alt="Generic placeholder image"
          />
          <div class="media-body"></div>
        </div> */}
        <div
          class="card shadow border border-white bg-light mb-3"
          style={{ borderRadius: 10 }}
        >
          <div class="card-header bg-white p-2 ">
            <div
              class="spinner-grow spinner-grow-sm text-success ml-1"
              role="status"
            ></div>
            {this.props.sub.NameClass}
          </div>
          <div class="card-body bg-white ">
            {/* <h5 class="card-title">Content/Detail</h5> */}
            <h6 className="text-muted h7" style={this.style}>
              Hora Inicio: {this.props.sub.HoraInicio}
            </h6>
            <h6 className="text-muted h7" style={this.style}>
              Modulo: {this.props.sub.Modulo}
            </h6>
            <h6 className="text-muted h7" style={this.style}>
              Faltas: {this.props.sub.Faltas}
            </h6>
            <h6 className="text-muted h7" style={this.style}>
              Acumulado: {this.props.sub.Acumulacion}
            </h6>
          </div>
          <div className="card-footer bg-white text-center p-1">
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <div role="group" aria-label="Basic example">
                    {ButtonWeek}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Card;
