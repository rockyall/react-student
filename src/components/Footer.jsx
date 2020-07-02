import React, { Component } from "react";
import { render } from "@testing-library/react";

const Footer = (props) => {
  return (
    <React.Fragment>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <footer className="page-footer font-small " style={{ background: "black" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5">
              <div className="mb-5 text-center">
                <a className="fb-ic">
                  <i
                    className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"
                    style={{ color: "gray" }}
                  >
                    {" "}
                  </i>
                </a>
                <a className="tw-ic">
                  <i
                    className="fab fa-python fa-lg white-text mr-md-5 mr-3 fa-2x"
                    style={{ color: "gray" }}
                  >
                    {" "}
                  </i>
                </a>
                <a className="tw-ic">
                  <i
                    className="fab fa-spotify fa-lg white-text mr-md-5 mr-3 fa-2x"
                    style={{ color: "gray" }}
                  >
                    {" "}
                  </i>
                </a>
                <a className="tw-ic">
                  <i
                    className="fab fa-react fa-lg white-text mr-md-5 mr-3 fa-2x"
                    style={{ color: "gray" }}
                  >
                    {" "}
                  </i>
                </a>
                <a className="tw-ic">
                  <i
                    className="fab fa-node fa-lg white-text mr-md-5 mr-3 fa-2x"
                    style={{ color: "gray" }}
                  >
                    {" "}
                  </i>
                </a>
                <a className="tw-ic">
                  <i
                    className="fab fa-js-square fa-lg white-text mr-md-5 mr-3 fa-2x"
                    style={{ color: "gray" }}
                  >
                    {" "}
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="rgba-white-light" style={{ color: "white" }}></hr>
        <div
          className="footer-copyright text-center py-4"
          style={{ color: "white" }}
        >
          © 2020 | Ricardo All
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
