import React, { Component } from "react";

class UnitecDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { SemanaContent: {} };
  }

  handleClick = (param) => {
    if (param === null) return;
    this.props.OnSemanaSelected(param);
    this.state.SemanaContent = param;
    this.setState({ ...this.state.SemanaContent }, () => {
      console.log("update For the contetn week", this.state.SemanaContent);
    });
  };

  render() {
    const ButtonCount = this.props.CurrentItem.lstSemana.map((resp, index) => {
      return (
        <div key={index} className="col">
          <button
            onClick={() => {
              this.handleClick(resp);
            }}
            type="button"
            class="btn btn-outline-dark"
          >
            Semana {resp.Semana} |
            <span className="ml-2 badge badge-light badge-pill">
              {resp.Actividades.length}
            </span>
          </button>
        </div>
      );
    });
    return (
      <React.Fragment>
        <div className="row shadow p-5 mb-5  bg-white rounded">
          {/* <div className="col-md-3 text-center pt-5 bg-dark">
            <img
              src="https://www.ceutec.hn/assets/img/logo-ceutec-blanco.png"
              width="300px"
              height="81px"
            />
          </div> */}
          <div className="col">
            <h3>
              {this.props.CurrentItem.NameClass} -{" "}
              {this.props.CurrentItem.Seccion}
            </h3>

            <p style={{ margin: 0 }}>
              Hora de Clase: {this.props.CurrentItem.HoraInicio}
            </p>
            <p style={{ margin: 0 }}>Faltas: {this.props.CurrentItem.Faltas}</p>
            <p style={{ margin: 0 }}>
              Semanas habilitadas: {this.props.CurrentItem.lstSemana.length}
            </p>
            <p>Acumulado: {this.props.CurrentItem.Acumulacion}</p>
            <div className="row">{ButtonCount}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UnitecDetail;
