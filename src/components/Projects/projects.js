import React, { Component } from "react";
import zoo from "../../images/zoo_logo.png";

class Projects extends Component {
  render() {
    return (
      <div id="projectvh">
        <div className="container" id="projects">
          <div className="row">
            <div className="col" id="proj">
              <img id="colimg" src={zoo} alt="zoopocalypse logo" />
              <h5>A Spelling Playground for Children</h5>
              <p>
                In Development. Zoopocalypse aims to reinforce the correct
                spelling of zoo animal names. Spelling an animal name correctly,
                in order, releases the animal from its cage. As the player
                levels up, the animal names grow more challenging.{" "}
              </p>
              <a href="https://zoopocalypse.herokuapp.com" target="_blank">
                <button type="button" className="btn btn-green">
                  Check me out!
                </button>
              </a>
            </div>
            <div className="col" id="proj">
              <h1>Guess the Composer</h1>
              <h5>Test your listening chops</h5>
              <p>
                A simple take on a standard listening exercise from music
                school. Listen to context clues from the composition playing and
                see if you can guess the composer's name.{" "}
              </p>
              <img id="colimg" src="" alt="proj0logo" /> <br />
              <button type="button" className="btn btn-green">
                Drop the needle
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col" style={{ height: "750px" }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
