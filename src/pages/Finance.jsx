import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";

class Finance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      profiles: {},
    };
  }

  GetDetailsData = async () => {
    console.clear();
    this.setState((state) => {
      state.details = [];
      return state;
    });
    const respData = await fetch("http://localhost:5000/api/finance", {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": [
          "application/json",
          "text/plain",
          "application/x-www-form-urlencoded",
        ],
      },
    });
    const data = await respData.json();
    console.log(data);

    this.setState((state) => {
      state.details = data;
      return state;
    });
    console.log("this.state.details");
    console.log(this.state.details);
  };

  componentDidMount = async () => {
    await this.GetDetailsData();
  };

  render() {
    const TableRows = this.state.details.map((param, index) => {
      return (
        <tr key={index}>
          <td style={{ textAlign: "left" }}>{param.date.split("T")[0]}</td>
          <td style={{ textAlign: "left" }}>{param.reference}</td>
          <td style={{ textAlign: "left" }}>{param.description}</td>
          <td style={{ textAlign: "left" }}>{param.debit}</td>
          <td style={{ textAlign: "left" }}>{param.credit}</td>
          <td style={{ textAlign: "left" }}>{param.balance}</td>
          <td>
            <button className="btn btn-outline-primary btn-sm">Select</button>
          </td>
        </tr>
      );
    });
    return (
      <React.Fragment>
        <div id="finance">
          <NavBar></NavBar>
          <div style={{ marginTop: 80 }}></div>
          <div className="container-fluid">
            <div className="row">
              <Profile></Profile>
            </div>
            <div className="row mt-2">
              <div className="col-12">
                <h5 className="font-weight-bold">Sumary</h5>
              </div>
              <div className="col-12"></div>
            </div>
            <div className="row">
              <div className="col-12">
                <div
                  className="p-1 mt-2 mb-5 bg-white"
                  style={{ height: "40vh", overflowY: "auto" }}
                >
                  <table className="table table-borderless table-hover table-custom">
                    <thead>
                      <tr>
                        <th style={{ textAlign: "left" }}>
                          Fecha de Transaccion
                        </th>
                        <th style={{ textAlign: "left" }}>Referencia</th>
                        <th style={{ textAlign: "left" }}>Descripcion</th>
                        <th style={{ textAlign: "left" }}>Debito</th>
                        <th style={{ textAlign: "left" }}>Cedito</th>
                        <th style={{ textAlign: "left" }}>Balance</th>
                        <th style={{ width: 140 }}>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>{TableRows}</tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="d-flex justify-content-between">
                  <h4 className="text-muted">Goals</h4>
                  <button className="btn btn-outline-dark btn-sm">
                    Add new goal
                  </button>
                </div>
                <hr />
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Finance;
