import React, { Component } from "react";
import logo from "../../images/mb2.png";
import pdf from "../../images/resume.pdf";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="#jumbotron" className="navbar-brand">
            <img id="logo" src={logo} alt="mb-logo" />
          </a>
          <div className="navcontainer">
            <li>
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href={pdf} target="_blank" className="nav-link">
                Resume
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
