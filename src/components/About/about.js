import React, { Component } from "react";
import mbag from "../../images/mbag24.png";

class About extends Component {
  render() {
    return (
      <div>
        <div className="container" id="about">
          <div className="row">
            <div className="col-3">
              <img id="colimg" src={mbag} alt="mb-avatar" />
            </div>
            <div className="col-9" style={style} id="aboutrow1col1">
              <h3>Coding. Blah Blah Blah More here</h3>
              <hr className="my-4" />
              <h5>Fun Fact!</h5>
            </div>
          </div>
          <div className="space" />
          <div className="row">
            <div className="col-8">
              <h3>Text text text i am some text</h3>
            </div>
            <div className="col-4">
              text text i am a bit more text hahahaha this is fun isn't it?
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const style = {
  color: "#3F512B"
};

export default About;

// <p className="about" style={{ color: "#3F512B" }}>
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam felis
// urna, posuere non nulla ac, auctor tempor felis. Nulla in mi non
// diam pellentesque elementum nec vel diam. Aliquam enim turpis,
// aliquam a quam in, sodales congue tellus. Ut in magna ut urna
// condimentum lobortis. Mauris elementum nisl turpis, nec suscipit sem
// tempus in. Class aptent taciti sociosqu ad litora torquent per
// conubia nostra, per inceptos himenaeos. Etiam iaculis facilisis
// felis, ut tempus urna feugiat non. Donec lobortis neque vitae lacus
// consectetur finibus. Donec eu tortor congue massa mollis finibus nec
// vitae purus. Phasellus ullamcorper, erat at accumsan viverra, eros
// tellus lacinia lorem, vel semper tellus dolor ac mi. Cras quis lacus
// nulla. Integer finibus scelerisque purus eu consectetur. Nam sit
// amet lectus nisi. Praesent tincidunt fermentum tortor, eu vestibulum
// felis convallis in. Pellentesque nulla quam, semper dictum leo eu,
// pharetra volutpat justo. Quisque fermentum odio euismod mauris
// blandit egestas. Proin fermentum in risus sit amet dignissim. Class
// aptent taciti sociosqu ad litora torquent per conubia nostra, per
// inceptos himenaeos. Aenean sed ipsum semper, euismod lacus eu, porta
// libero. Fusce sit amet commodo purus, vestibulum accumsan mauris. Ut
// ac enim velit. Vestibulum pellentesque, nunc quis vehicula
// tristique, ex tortor mattis leo, eget tincidunt nibh augue sed odio.
// Vivamus nec semper quam.
// </p>
