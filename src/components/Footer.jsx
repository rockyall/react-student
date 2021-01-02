import React, { Component } from "react";
import { render } from "@testing-library/react";

let style = { color: "white", textAlign: "left" };

const Footer = (props) => {
  return (
    <React.Fragment>
      <footer style={{ background: "#212121" }}>
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
              <p style={{ color: "gray", textAlign: "left", fontSize: 12 }}>
                CODE WANTS TO BE SIMPLE is an initiative to help the upcoming
                programmers with the code. C, C++, Java, HTML, CSS, Bootstrap,
                JavaScript, PHP, Android, SQL and Algorithm.
              </p>
            </div>
            <div className="col-md-12 col-lg-4 pt-5">
              <h5 style={style}>Dev Topics</h5>
              <p style={{ color: "gray", textAlign: "left", fontSize: 12 }}>
                Development topics posted on{" "}
                <a
                  target="_blank"
                  href="https://dev.to/rickywrong"
                  className="text-info"
                >
                  dev.to
                </a>
              </p>
            </div>
            <div className="col-md-12 col-lg-4 pt-5">
              <h5 style={style}>Contact</h5>
              <p>
                <strong>Phone: </strong> +504 97479916 <br />
                <strong>Emails: </strong> richi@hotmail.com
                <br />
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="d-flex flex-row align-items-end">
            <div className="col-md-12 py-5">
              <h6 className="text-center text-secondary font-weight-normal">
                Follow
              </h6>
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

          <div className="row">
            <div className="col-md-12">
              <div
                className="footer-copyright text-center pb-2"
                style={{ color: "white", fontSize: 14 }}
              >
                © 2020 | Ricardo All
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h6>Facebook</h6>
            </div>
            <div className="col">
              <h6>Facebook</h6>
            </div>
            <div className="col">
              <h6>Facebook</h6>
            </div>
            <div className="col">
              <h6>Facebook</h6>
            </div>
            <div className="col">
              <h6>Facebook</h6>
            </div>
          </div>
        </div> */}
      </footer>
    </React.Fragment>
  );
};

export default Footer;
