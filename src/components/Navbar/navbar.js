import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <a className="navbar-brand"> MB (Logo)</a>
          <div className="navcontainer">
            <li>
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                asdf
              </a>
            </li>
            <div className="line" />
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
