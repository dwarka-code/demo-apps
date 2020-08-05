import React, { Component } from "react";
import Sidebar from "./sidebar";
import Content from "./content";

//import Logo from '';

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <div class="sidebar">
          <Sidebar />
        </div>
        <div class="content">
          <Content />{" "}
        </div>
      </div>
    );
  }
}

export default Layout;
