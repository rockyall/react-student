import React, { Component } from "react";
import { render } from "@testing-library/react";

let style = { color: "white", textAlign: "left" };

const Footer = (props) => {
  return (
    <React.Fragment>
      <footer style={{ background: "White" }}>
        <div className="container">
          <div className="d-flex flex-row align-items-end">
            <div className="col-md-12 py-5">
              <h6 className="text-center font-weight-normal">Follow</h6>
              <div className="text-center">
                <ul style={{ display: "inline", padding: 0 }}>
                  <i
                    className="fab fa-github fa-lg m-2 fa-1.5x"
                    style={{ color: "gray" }}
                  >
                    {" "}
                  </i>
                  {/* <i
                    class="fab fa-instagram fa-lg m-2 fa-1.5x"
                    style={{ color: "gray" }}
                  ></i> */}
                  {/* <i
                    className="fab fa-react fa-lg m-2 fa-1.5x"
                    style={{ color: "gray" }}
                  >
                    {" "}
                  </i> */}
                  {/* <i
                    class="fab fa-linkedin fa-lg m-2 fa-1.5x"
                    style={{ color: "gray" }}
                  ></i> */}
                  <i
                    class="fab fa-spotify fa-lg m-2 fa-1.5x"
                    style={{ color: "gray" }}
                  ></i>
                  <i
                    class="fab fa-soundcloud fa-lg m-2 fa-1.5x"
                    style={{ color: "gray" }}
                  ></i>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-md-12">
              <div
                className="footer-copyright text-center pb-2"
                style={{ color: "white", fontSize: 14 }}
              >
                © 2020 | Ricardo All
              </div>
            </div>
          </div> */}
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
