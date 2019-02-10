import React, { Component } from "react";

class Jumbotron extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-4" id="jtronh1" style={font}>
            Hello I'm Michael.
          </h1>
          <p className="lead" style={font}>
            Web Developer based in Austin, TX
          </p>
          <hr className="my-4" />
          <p style={font}>
            Lets put a bit more info about me here once ready :){" "}
          </p>
        </div>
      </div>
    );
  }
}

const font = {
  fontFamily: "Josefin Sans"
};

export default Jumbotron;
