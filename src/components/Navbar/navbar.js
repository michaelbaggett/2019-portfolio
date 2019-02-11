import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <a className="navbar-brand"> MB (Logo)</a>
          <div className="navcontainer">
            <li>
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </li>
            <li>
              <a href="#asdf" className="nav-link">
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
