import React, { Component } from "react";
import Navbar from "./components/Navbar/navbar";
import Jumbotron from "./components/Jumbotron/jumbotron";
import About from "./components/About/about";
import Projects from "./components/Projects/projects";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron />
        <About />
        <Projects />
      </div>
    );
  }
}

export default App;
