import React, { Component } from "react";
import mbag from "../../images/mbag24.png";

class About extends Component {
  render() {
    return (
      <div>
        <div className="container" id="about">
          <div className="row">
            <div className="col-3">
              <img id="colimg" src={mbag} alt="mb-avatar" />
            </div>
            <div className="col-9" style={style} id="aboutrow1col1">
              <h3>Developer | Opera Singer </h3>
              <hr className="my-4" />
              <h5>I love working and building with javascript.</h5>
            </div>
          </div>
          <div className="space" />
          <div className="row">
            <div className="col-8">
              <h3>
                Opera Singer turned web developer. yadda yadda yadda more about
                me{" "}
              </h3>
            </div>
            <div className="col-4">
              <h5>Something interesting? </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const style = {
  color: "#3F512B"
};

export default About;
