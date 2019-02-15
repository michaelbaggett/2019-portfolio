import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="col">
            <h5>Check me out on github or connect with me on linkedin</h5>
          </div>
          <div className="row">
            <div className="col">
              <a href="https://github.com/michaelbaggett" target="_blank">
                <i className="fab fa-github" />
              </a>
              <a
                href="https://www.linkedin.com/in/michael-baggett-326689149/"
                target="_blank"
              >
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
