import React, { Component } from "react";
//import Logo from '';

class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <div className="logo">
          <img src="https://www.hdfcergo.com/images/default-source/home/logo_hdfc.svg" />
        </div>
        <div className="menu">
          <h4>Projects</h4>
          <a href="/project" className="nav-a">
            OCR
          </a>
          <a href="/project" className="nav-a">
            Renewal
          </a>
        </div>
      </div>
    );
  }
}

export default SideBar;
