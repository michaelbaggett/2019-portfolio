import React, { Component } from "react";

class Jumbotron extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="typewriter">
            <h1 className="display-4" style={font}>
              <span>Hello I'm Michael.</span>
            </h1>
          </div>
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
