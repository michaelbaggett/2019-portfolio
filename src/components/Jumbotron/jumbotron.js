import React, { Component } from "react";

class Jumbotron extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-4" id="jtronh1" style={font}>
            Hello I'm Michael.
          </h1>
          <hr className="my-4" style={{ borderColor: "#3f512b" }} />
          <p style={font}>Full-Stack Web Developer based in Austin, TX </p>
        </div>
      </div>
    );
  }
}

const font = {
  fontFamily: "Josefin Sans"
};

export default Jumbotron;
