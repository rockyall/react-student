import React, { Component } from "react";
import { render } from "@testing-library/react";

let style = { color: "white", textAlign: "center" };

const Footer = (props) => {
  return (
    <React.Fragment>
      <footer style={{ background: "#1F2122" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4 pt-5">
              <ion-icon
                size="large"
                name="code-outline"
                style={{ color: "white" }}
              ></ion-icon>
            </div>
            <div className="col-6 text-center"></div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-4 pt-5">
              <h5 style={{ color: "white", textAlign: "left" }}>Languages</h5>
              <p style={{ color: "gray", textAlign: "left", fontSize: 10 }}>
                CODE WANTS TO BE SIMPLE is an initiative to help the upcoming
                programmers with the code. C, C++, Java, HTML, CSS, Bootstrap,
                JavaScript, PHP, Android, SQL and Algorithm.
              </p>
            </div>
            <div className="col-md-12 col-lg-4 pt-5">
              <h5 style={style}>More Content</h5>
            </div>
            <div className="col-md-12 col-lg-4 pt-5">
              <h5 style={style}>Comming Soon...</h5>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="d-flex flex-row align-items-end">
            <div className="col-md-12 py-5">
              <div className="text-center">
                <a className="fb-ic">
                  <i
                    className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-1.5x"
                    style={{ color: "gray" }}
                  >
                    {" "}
                  </i>
                </a>
                <a className="tw-ic">
                  <i
                    className="fab fa-python fa-lg white-text mr-md-5 mr-3 fa-1.5x"
                    style={{ color: "gray" }}
                  >
                    {" "}
                  </i>
                </a>
                <a className="tw-ic">
                  <i
                    className="fab fa-spotify fa-lg white-text mr-md-5 mr-3 fa-1.5x"
                    style={{ color: "gray" }}
                  >
                    {" "}
                  </i>
                </a>
                <a className="tw-ic">
                  <i
                    className="fab fa-react fa-lg white-text mr-md-5 mr-3 fa-1.5x"
                    style={{ color: "gray" }}
                  >
                    {" "}
                  </i>
                </a>
                <a className="tw-ic">
                  <i
                    className="fab fa-node fa-lg white-text mr-md-5 mr-3 fa-1.5x"
                    style={{ color: "gray" }}
                  >
                    {" "}
                  </i>
                </a>
                <a className="tw-ic">
                  <i
                    className="fab fa-js-square fa-lg white-text mr-md-5 mr-3 fa-1.5x"
                    style={{ color: "gray" }}
                  >
                    {" "}
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="footer-copyright text-center pb-2"
          style={{ color: "white" }}
        >
          © 2020 | Ricardo All
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
