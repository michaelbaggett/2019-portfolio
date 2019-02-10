import React, { Component } from "react";

class Jumbotron extends Component {
  render() {
    return (
      <div>
        <div class="jumbotron">
          <h1 class="display-4" id="jtronh1">
            Hello I'm Michael.
          </h1>
          <p class="lead">
            Let's style some more content related to me that the user sees upon
            initial loading.
          </p>
          <hr class="my-4" />
          <p>Lets put some styled interesting, but limited content here!</p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
