import React, { Component } from "react";
import avatar from "../../images/avatar.jpg";

class Projects extends Component {
  render() {
    return (
      <div id="projectvh">
        <div className="container">
          <div className="row">
            <p>the below projects may live on their own page. currently TBD</p>
          </div>
          <div className="row">
            <div className="col" id="projectcol">
              <div className="card border-error text-white bg-dark mb-3">
                <div className="card-header">A Spelling Playground</div>
                <div className="card-body">
                  <h5 className="card-title">Zoopocalypse</h5>
                  <p className="card-text">
                    This is a living project. We are developing a children's
                    game which helps reinforce the correct spelling of zoo
                    animals names.
                  </p>
                </div>
              </div>
            </div>
            <div className="col" id="projectcol">
              <div className="card border-error text-white bg-dark mb-3">
                <div className="card-header">Drop the needle</div>
                <div className="card-body">
                  <h5 className="card-title">
                    Guess Who: Classical Music Edition
                  </h5>
                  <p className="card-text">
                    A project which takes me back to the many days and nights
                    spent studying for listen exams.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img id="colimg" src={avatar} alt="mb-avatar" />
            </div>
            <div className="col-8" id="testcol">
              I am a row that will hold some content opposite of an image to the
              left of me.
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>some moreinformation will go here and it will be styled</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
