import React, { Component } from "react";
import { white } from "ansi-colors";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer style={{ backgroundColor: "white" }}>
          <div className="col">
            <h5>Check me out on github or connect with me on linkedin</h5>
          </div>
          <div className="row">
            <div className="col">
              <a href="#">
                <i class="fab fa-github" />
              </a>
              <a href="#">
                <i class="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
