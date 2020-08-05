import React, { Component } from "react";
import Sidebar from "./sidebar";

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
        <div class="content" />
      </div>
    );
  }
}

export default Layout;
