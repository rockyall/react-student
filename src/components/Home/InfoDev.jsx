import React, { Component } from "react";

class InfoDev extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    var _coomeet = [];
    _coomeet["PartnerId"] = 16091302564962;
    var coomeet = document.createElement("script");
    coomeet.type = "text/javascript";
    coomeet.async = true;
    coomeet.src = "https://i.coomeet.com/js/code.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(coomeet, s);
  };

  render() {
    return (
      <React.Fragment>
        <div className="position-sticky fixed-top h-2 bg-dark text-white">
          <div className="container">
            {" "}
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <p>Made in React with Nodejs</p>
              </div>
              <div className="col-lg-6 col-md-12 text-right">
                <button className="btn btn btn-dark btn-sm ">More info</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default InfoDev;
