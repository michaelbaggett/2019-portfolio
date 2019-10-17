import React from "react";

const font = {
  fontFamily: "Josefin Sans"
};

const Jumbotron = () => (
  <div>
    <div className="jumbotron">
      <div className="typewriter">
        <h1 className="display-4" style={font}>
          Hello I'm Michael.
        </h1>
      </div>
      <hr className="my-4" style={{ borderColor: "#3f512b" }} />
      <p style={font}>Full-Stack Web Developer based in Austin, TX </p>
    </div>
  </div>
);

export default Jumbotron;
