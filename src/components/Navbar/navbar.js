import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="container">
            <a className="navbar-brand"> MB (Logo)</a>
            <span className="navbar-text">
              Clickable Nav Content Will Appear Here
            </span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
