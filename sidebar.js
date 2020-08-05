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
        <div class="logo">
          <img src="https://www.hdfcergo.com/images/default-source/home/logo_hdfc.svg" />
        </div>
        <div class="menu">
          <a href="/ocr">OCR</a>
          <a href="/ocr">Renewal</a>
        </div>
      </div>
    );
  }
}

export default SideBar;
