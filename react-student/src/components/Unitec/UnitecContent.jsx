import React, { Component } from "react";
import anime from "animejs";
import { Cookies } from "react-cookie";

class UnitecContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onHandleClick = (param) => {
    console.log("clicking url activite o resource", param);
    window.open(param, "_blank")
    
  };

  render() {
    let getFullUrl = (param) => {
      return `https://unitec.blackboard.com/${param}`;
    };
    const SemenaContent = this.props.CurrentSemana;
    const RecursosList = SemenaContent.Recursos.map((resp, index) => {
      return (
        <a
          key={index}
          href={getFullUrl(resp.Header.link_href)}
          target="_blank"
          className=" list-group-item-action p-2 d-flex text-left justify-content-between align-items-left"
        >
          {resp.Header.Name}
          <span className="badge badge-info badge-pill"></span>
        </a>
      );
    });
    const ActividadesList = SemenaContent.Actividades.map((resp, index) => {
      return (
        <a
          key={index}
          type="button"
          // onClick={() => {
          //   this.onHandleClick(getFullUrl(resp.Header.link_href));
          // }}
          href={getFullUrl(resp.Header.link_href)}
          target="_blank"
          className="list-group-item-action p-2 d-flex text-left justify-content-between align-items-left"
        >
          {resp.Header.Name}
          <span className="badge badge-info badge-pill"></span>
        </a>
      );
    });
    return (
      <React.Fragment>
        <div className="container-fluid ">
          <div className="row p-3 text-center" style={{ display: "block" }}>
            <h5>Contenido | Semana {this.props.CurrentSemana.Semana}</h5>
          </div>
          <div class="row text-center">
            <div class="col-sm-6">
              <h5>Recursos</h5>
            </div>
            <div class="col-sm-6">
              <h5>Actividades</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              {/* <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Recursos</h5>
                      <div className="card-body">
                       
                      </div>
                    </div>
                  </div> */}
              <ul class="list-group list-group-flush">{RecursosList}</ul>
            </div>
            <div className="col-sm-6">
              {/* <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Actividades</h5>
                      
                    </div>
                  </div> */}
              <p className="card-text">{ActividadesList}</p>
            </div>
          </div>
        </div>
        {/* <div className="card text-center shadow bg-white rounded">
          <div className="card-body">
            
          </div>
        </div> */}
      </React.Fragment>
    );
  }
}

export default UnitecContent;
