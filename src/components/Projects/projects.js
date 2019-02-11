import React, { Component } from "react";
import avatar from "../../images/avatar.jpg";

class Projects extends Component {
  render() {
    return (
      <div id="projectvh">
        <div className="container">
          <div className="row">
            <div className="col" id="proj">
              <h1>Zoopocalypse</h1>
              <h4>A Spelling Playground</h4>
              <button type="button">Check me out!</button>
              <img id="colimg" src={avatar} alt="mb-avatar" />
            </div>
            <div className="col" id="proj">
              <h1>Guess Who: Classical Music Edition</h1>
              <h4>Drop the needle</h4>
              <img id="colimg" src={avatar} alt="mb-avatar" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
