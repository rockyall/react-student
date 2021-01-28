import React, { Component } from "react";
import NavBar from "../components/NavBar";

class Finance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  fetchData = () => {
    fetch("http://localhost:63069/api/finance", {
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
    })
      .then(async (resp) => {
        const respData = await resp.json();
        if (!respData) return;
        if (respData.length > 0) {
          this.setState((state) => {
            state.data = respData;
            return state;
          });
        }
      })
      .catch((error) => {
        console.log(`some error happened ${error}`);
      });
    console.log("this.state.data");
    console.log(this.state.data);
  };

  componentDidMount = () => {
    this.fetchData();
  };

  render() {
    const TableRows = this.state.data.map((param, index) => {
      return (
        <tr key="index">
          <td></td>
        </tr>
      );
    });
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <div style={{ marginTop: 100 }}></div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h2>Ricardo All Ochoa</h2>
              <h4>Personal Finance $</h4>
            </div>
            <div className="col-6">
              <button
                className="btn btn-sm btn-primary"
                onClick={() => this.fetchData()}
              >
                Refresh
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                className="p-4 mt-2 mb-5 shadow"
                style={{ height: "60vh", overflowY: "auto" }}
              >
                <table className="table table-borderless table-hover ">
                  <thead>
                    <tr>
                      <th>Fecha de Transaccion</th>
                      <th>Referencia</th>
                      <th>Descripcion</th>
                      <th>Debito</th>
                      <th>Cedito</th>
                      <th>Balance</th>
                      <th style={{ width: 140 }}>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>10/8/2020</td>
                      <td>87654</td>
                      <td>Pago de planilla</td>
                      <td>10,000</td>
                      <td>10,000</td>
                      <td>15,000</td>
                      <td>
                        <div>
                          <button className="btn btn-block btn-sm btn-info">
                            Consultar
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>10/8/2020</td>
                      <td>87654</td>
                      <td>Pago de planilla</td>
                      <td>10,000</td>
                      <td>10,000</td>
                      <td>15,000</td>
                      <td>
                        <div>
                          <button className="btn btn-block btn-sm btn-info">
                            Consultar
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Finance;
